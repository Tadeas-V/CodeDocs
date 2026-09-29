<style>
  body { font-family: monospace; }
  code { color: aqua; background-color: #414141ff; }
  h1 { color: royalblue; }
  h2 { color: dodgerblue; }
  h3 { color: cornflowerblue; }
  strong { color: paleturquoise; }
  em { color: palegreen; }
  blockquote { color: darkseagreen; background-color: rgba(71, 61, 139, 0.125); border-left-color: rgba(71, 61, 139, 1); }
  pre { background-color: rgba(71, 61, 139, 0.125); border-color: rgba(71, 61, 139, 1); }
  ul { list-style-type: square; }
  li > ul { list-style-type: circle; }
</style>

# [08-09-26] H01 - Opakování (Základní informace)

> `whoami` vždy, abychom věděli, kdo jsme

**Důležité složky:**
- `/` kořenová složka
- `~` domovská složka
  - `/home/[username]/` domovská složka (shodné jako `~`)
- V `/bin` jsou uložené všechny příkazy (pod-programy)
- `root` souvisí s právy. Má absolutní moc! (12 bitů ?rwx)
- `touch [file]` vytvoření souboru
  - `sudo touch [file]` pro vytvoření souboru v `root`
- `sudo` pro větší práva
- `mkdir [directory]` vytvoření složky
- `soffice` otevře soubor v LibreOffice
- `cat [file]` vypíše obsah souboru
  - `cat [file] > [file]` vytvoří (překopíruje) obsah souboru
- `echo ""` vypišuje text
  - `echo "" > [file]` přepíše soubor
  - `echo "" >> [file]` doplní na nový řádek v souboru
- `mv [file] [directory]` přesune soubor
  - `mv [file] [new-name]` přejmenuje soubor
- `cp [file] [directory]` kopíruje soubor
- `ls` výpis
  - `ls -l` dlouhý výpis (práva)
  - `ls -li` dlouhý výpis s i-note
    - `.` ta složka/soubor
    - `..` složka nadřazená (u složek)

```txt
-rw-rw-r-- 1 ubuntu2204 ubuntu2204 54 zář  8 14:51 SKOLA/pepa
| |  |  |  |     |          |      |   |   |   |      |
| |  |  |  |     |          |      |   |   |   |      soubor
| |  |  |  |     |          |      |   |   |   čas
| |  |  |  |     |          |      |   |   den
| |  |  |  |     |          |      |   měsíc
| |  |  |  |     |          |      velikost
| |  |  |  |     |          jméno počítače
| |  |  |  |     uživatel
| |  |  |  počet tvrdých odkazů
| |  |  ostatní (O)
| |  skupina (G)
| vlastník (U)
{
  - = soubor
  d = složka
  l = symbolický odkaz
  p = roura
}
```

- `chmod UGO [file]` mění práva
- `ln [soubor] [link-file]` vytvoří tvrdý odkaz
- `ln -s [soubor] [symbol-link-file]` vytvoří měkký (symbolický) odkaz

<pre>
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -li
celkem 20
1052101 -rw-rw-r-- 4 ubuntu2204 ubuntu2204   54 zář  8 15:10 dominik
1048759 lrwxrwxrwx 1 ubuntu2204 ubuntu2204    7 zář  8 15:23 <font color="#2AA1B3"><b>link</b></font> -&gt; dominik
1052099 drwxrwxr-x 2 ubuntu2204 ubuntu2204 4096 zář  8 14:55 <font color="#12488B"><b>SKOLA</b></font>
1052101 -rw-rw-r-- 4 ubuntu2204 ubuntu2204   54 zář  8 15:10 1
1052101 -rw-rw-r-- 4 ubuntu2204 ubuntu2204   54 zář  8 15:10 2
1052101 -rw-rw-r-- 4 ubuntu2204 ubuntu2204   54 zář  8 15:10 3
</pre>

> Měkký odkaz má jiné i-note než tvrdé odkazy
- `rm [file]` vymaže soubor
  - `rm -R [directory]` vymaže složku (prázdnou i plnou)
  - `rmdir [dirrectory]` vymaže pouze prázdnou složku
  - `rm *` vymaže vše na ploše (Tedy vše podřadné složce ve které stojíme!)
    - `rm -R *` použijeme máme-li plnou složku

# [15-09-26] H02

Pro správné pochopení tvrdých odkazů je nutné nejříve pochopit jak Linux ukládá data na disk. V operačnímch systémech Unix/Linux je soubor strikně rozdělen na dvě nezávislé části na **inote** a **adresář**:

## Metadata a data (inote)

Jsou všechny klíčové informace o souboru jako je jeho *velikost*, *vlastník*, *přístup. oprávnění*, *čas poslední změny* a *přímé ukazatele na fyzické datové bloky na disku*. To vše je uložené ve speciální struktuře zvané inote (indexový uzel). Každý má v rámci diskového oddílu své unikátní číslo - číslo samotné však neobsahuje název souboru.

## Název souboru (adresář)

Jméno souboru, jak ho vidí uživatel, je uloženo v adresáři. Adresář je z technického hlediska pouhá tabulka, která mapuje lidsky čitelný název na konkrétní číslo indexového uzlu (inote).

---

Na adresář **nelze** vytvořit tvrdý odkaz! Vedlo by to k zacyklení.

> Programy jako `find` (vyhledávání) nebo `du` (výpočet velikosti složky) nebo jakékoliv zálohovací skrypty by do tohoto cyklu vstoupily a začaly v něm obíhat donekonečna. To by vedlo k vyčerpání paměti a, zaplokování procesoru nebo k pád celého běžícího skriptu či systému.

---

Ačkoli jsou tvrdé odkazy efektivní, architektura souborových systémů jim staví do cesty dvě zásadní omezení, která je nutné při správném sstému respektovat:

1. **Nemožnost překročit hranice diskového oddílu**<br>
  Tvrdý odkaz může odkazovat na soubor pouze v rámci jednoho a téhož souborového systému (partition). Je to dáno tím, že každý doskový oddíl má své vlastní, nezávislé číslování inotů. Pokud by odkaz směřoval na jený disk, došlo by ke kolizi, protože *inote 50* na *disku A* reprezentuje jiný soubor ne tnetýž na *disku B*.

2. **Zákaz vytváření odkazů na adresář**<br>
   Běžný uživatel má operačním systémem striktně zakázáno vytvářet tvrdé odkazy na celé adresáře. Tento zákaz chrání integritu a stabilitu celého souborového systému.

---

| **Vlastnost** | **Hard Link** | **Symlink / Soft Link** |
| --------- | --------- | ------------------- |
| *Fyzická podstata* | Další jméno (ukazatel) pro stejný inote.<br>Nespotřebovává místo na disku navíc. | Samotný malý soubor, který v sobě obsahuje textovou cestu k cíli. |
| *Podpora adresář* | Ne - Uživatelům je vytváření systémem zakázáno. | ANO - Plná podpora, lze odkazovat na jakoukoliv složku v systému. |
| *Vazba přes disky (Oddíly)* | NE - Odkazováný iu původní soubor musí ležet na shodném disku. |  ANO - může odkazovat na soubory jiného disku |
| *Důsledek smazání originálu* | Odkaz plně funkční a přístupný, dokud link count neklesne na nulu. | Odkaz přestane fungovat. Stane se z nějneplatná (tzv. vysící) vazba. |

---

- `u` = Uživatel (*User*)
- `g` = SKupina (*Group*)
- `o` = Ostatní (*Other*)


  - `r` = `4` = *read*
  - `w` = `2` = *write*
  - `e` = `1` = *execute*

> `chmod u+r` = `chmod 700`

---

## SUID (Set User ID)

Má váhu `4`!

Pokud je SUID nastaven na binární spustitelném souboru, proces se nespustí s identitou a právy uživatele, který ho spustil, ale s právy reálného vlastníha tohoto souboru.

Běžný uživatel by si bez SUID nemohl znměnit vlastní heslo. Soubor `usr/bin/passwd` má proto nastavený SUID a vlastní ho root. Při spuštění získá proces dočasně identutu roota, provede zápis hesla a bezpečně skončí.

V `ls -l` nahrazuje `x` u **vlastník** znakem `s` (např. `-rwsr-xr-x`).

## SGID (Set Group ID)

Má váhu `2`!

SGID funguje na spustitelných souborech obdobně jako SUID, ale s tím rozdělením, že proces přebírá efektivní identutu vlastnické skupiny soubnoru.

Naprosto revoluční a klíčové je však využití SGID při aplikaci na adresáři (složky).

Standartně platí, že pokud uživatel vytvoří nový soubor, tento soubor získá jako vlastnickou skupinu primární skupinu daného uživatele. To níčí spolupráci v týmu.

Pokud však na adresář nastavíme SGID bit, jakýkoli nově vytvořený soubor nabo podadresář uvnitř AUTOMATICKY ZDĚDÍ vlastnickou skupinu mateřského adresáře. Všichni členové týmu tak k souborům okamžitě získají přístup.

V `ls -l` nahrazuje `x` u **skupina** znakem `s` (např. `drwxrwsr-x`).

## Sticky Bit

Má váhu `1`!

Sticky Bit má bohatou historii — v počátcích Unix uzamykal spustitelné programy v paměti RAM pro zrychlení startu. Dnes se však používá výhradně na adresářích.

Funguje jako vysoce účinný ochranný prvek omezující práva pro mazání souborů.

Vzpomeňte si na pravidla z druhého slidu: pokud má kdokoli práva `w` adresáři, může z něj smazat jakýkoli soubor. To je obrovské riziko u sdílených veřejných adresářů, jako je `/tmp`.

Do `/tmp` musí mít možnost zapisovat všichniuživatelé systému. Bez Sticky Bitu by mohl škodolibý uživatel smazat důležitá dočasná data jiného uživatele.

Pokud je Sticky Bit aktivní, soubor v adresáři smí smazat nebo přejmenovat POUZE jeho *skutečný vlastník*, *vlastník daného adresáře* nebo *uživatel root*.

V `ls -l` nahrazuje `x` u **ostatní** znakem `t` (např. `drwxrwxrwt`).

| Typ ukázky                | Adresář | USER | GROUP | OTHER | Celkový zápis |
| :------------------------ | :------ | :--: | :---: | :---: | :-----------: |
| adresář                   | NE      | ---  | ---   | ---   | -r-xr-xr-x    |
| soubor                    | NE      | ---  | ---   | ---   | -r-xr-xr-x    |
| soubor s právy USER       | NE      | ---  | ---   | ---   | -r-xr-xr-x    |
| soubor s právy GROUP      | NE      | ---  | ---   | ---   | -r-xr-xr-x    |
| soubor s právy OTHER      | NE      | ---  | ---   | ---   | -r-xr-xr-x    |
| soubor s právy SUID       | NE      | ---  | ---   | ---   | -r-xr-xr-x    |
| soubor s právy SGID       | NE      | ---  | ---   | ---   | -r-xr-xr-x    |
| soubor s právy Sticky Bit | NE      | ---  | ---   | ---   | -r-xr-xr-x    |

<pre>
drwxrwxr-x 2 ubuntu2204 ubuntu2204 4096 zář 22 14:38 <font color="#12488B"><b>ADRESAR</b></font>
-rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 zář 22 14:34 file
-rwx------ 1 ubuntu2204 ubuntu2204 0 zář 22 14:34 <font color="#26A269"><b>GROUP</b></font>
-rwx------ 1 ubuntu2204 ubuntu2204 0 zář 22 14:34 <font color="#26A269"><b>OTHER</b></font>
-rw-rw-r-T 1 ubuntu2204 ubuntu2204 0 zář 22 14:34 SB
-rw-rwSr-- 1 ubuntu2204 ubuntu2204 0 zář 22 14:34 <span style="background-color:#A2734C"><font color="#171421">SGID</font></span>
-rwSrw-r-- 1 ubuntu2204 ubuntu2204 0 zář 22 14:34 <span style="background-color:#C01C28"><font color="#D0CFCC">SUID</font></span>
-rwx------ 1 ubuntu2204 ubuntu2204 0 zář 22 14:34 <font color="#26A269"><b>USER</b></font>
</pre>

---

## Cvičení:

1. **CV01:**<br>
   Vytvoř soubor `test1.txt` a dej mu práva tak, aby vlastník mohl číst a zapisovat, skupina mohla jen číst a ostatní něměli žádná práva.

<pre>
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 540 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 0
-r-xr----- 1 ubuntu2204 ubuntu2204 0 zář 22 14:39 <font color="#26A269"><b>test1.txt</b></font>
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 640 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 0
-rw-r----- 1 ubuntu2204 ubuntu2204 0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch script.sh
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 711 
script.sh  test1.txt  
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 711 script.sh
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 0
-rwx--x--x 1 ubuntu2204 ubuntu2204 0 zář 22 14:42 <font color="#26A269"><b>script.sh</b></font>
-rw-r----- 1 ubuntu2204 ubuntu2204 0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir projekty
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 710 projekty
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 4
drwx--x--- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:44 <font color="#12488B"><b>projekty</b></font>
-rwx--x--x 1 ubuntu2204 ubuntu2204    0 zář 22 14:42 <font color="#26A269"><b>script.sh</b></font>
-rw-r----- 1 ubuntu2204 ubuntu2204    0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch tajny.log
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 600 t
tajny.log  test1.txt  
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 600 tajny.log
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch tajny.log
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 4
drwx--x--- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:44 <font color="#12488B"><b>projekty</b></font>
-rwx--x--x 1 ubuntu2204 ubuntu2204    0 zář 22 14:42 <font color="#26A269"><b>script.sh</b></font>
-rw------- 1 ubuntu2204 ubuntu2204    0 zář 22 14:46 tajny.log
-rw-r----- 1 ubuntu2204 ubuntu2204    0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch sdilene.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 666 sdilene.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 4
drwx--x--- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:44 <font color="#12488B"><b>projekty</b></font>
-rwx--x--x 1 ubuntu2204 ubuntu2204    0 zář 22 14:42 <font color="#26A269"><b>script.sh</b></font>
-rw-rw-rw- 1 ubuntu2204 ubuntu2204    0 zář 22 14:47 sdilene.txt
-rw------- 1 ubuntu2204 ubuntu2204    0 zář 22 14:46 tajny.log
-rw-r----- 1 ubuntu2204 ubuntu2204    0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir team
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 771 team/
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 8
drwx--x--- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:44 <font color="#12488B"><b>projekty</b></font>
-rwx--x--x 1 ubuntu2204 ubuntu2204    0 zář 22 14:42 <font color="#26A269"><b>script.sh</b></font>
-rw-rw-rw- 1 ubuntu2204 ubuntu2204    0 zář 22 14:47 sdilene.txt
-rw------- 1 ubuntu2204 ubuntu2204    0 zář 22 14:46 tajny.lo
drwxrwx--x 2 ubuntu2204 ubuntu2204 4096 zář 22 14:48 <font color="#12488B"><b>team</b></font>
-rw-r----- 1 ubuntu2204 ubuntu2204    0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 774 team/
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 8
drwx--x--- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:44 <font color="#12488B"><b>projekty</b></font>
-rwx--x--x 1 ubuntu2204 ubuntu2204    0 zář 22 14:42 <font color="#26A269"><b>script.sh</b></font>
-rw-rw-rw- 1 ubuntu2204 ubuntu2204    0 zář 22 14:47 sdilene.txt
-rw------- 1 ubuntu2204 ubuntu2204    0 zář 22 14:46 tajny.log
drwxrwxr-- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:48 <font color="#12488B"><b>team</b></font>
-rw-r----- 1 ubuntu2204 ubuntu2204    0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch runme.sh
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 4700 runme.sh
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 8
drwx--x--- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:44 <font color="#12488B"><b>projekty</b></font>
-rws------ 1 ubuntu2204 ubuntu2204    0 zář 22 14:51 <span style="background-color:#C01C28"><font color="#D0CFCC">runme.sh</font></span>
-rwx--x--x 1 ubuntu2204 ubuntu2204    0 zář 22 14:42 <font color="#26A269"><b>script.sh</b></font>
-rw-rw-rw- 1 ubuntu2204 ubuntu2204    0 zář 22 14:47 sdilene.txt
-rw------- 1 ubuntu2204 ubuntu2204    0 zář 22 14:46 tajny.log
drwxrwxr-- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:48 <font color="#12488B"><b>team</b></font>
-rw-r----- 1 ubuntu2204 ubuntu2204    0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch file
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 8
-rw-rw-r-- 1 ubuntu2204 ubuntu2204    0 zář 22 14:52 file
drwx--x--- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:44 <font color="#12488B"><b>projekty</b></font>
-rws------ 1 ubuntu2204 ubuntu2204    0 zář 22 14:51 <span style="background-color:#C01C28"><font color="#D0CFCC">runme.sh</font></span>
-rwx--x--x 1 ubuntu2204 ubuntu2204    0 zář 22 14:42 <font color="#26A269"><b>script.sh</b></font>
-rw-rw-rw- 1 ubuntu2204 ubuntu2204    0 zář 22 14:47 sdilene.txt
-rw------- 1 ubuntu2204 ubuntu2204    0 zář 22 14:46 tajny.log
drwxrwxr-- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:48 <font color="#12488B"><b>team</b></font>
-rw-r----- 1 ubuntu2204 ubuntu2204    0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 4764 runme.sh
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 8
-rw-rw-r-- 1 ubuntu2204 ubuntu2204    0 zář 22 14:52 file
drwx--x--- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:44 <font color="#12488B"><b>projekty</b></font>
-rwsrw-r-- 1 ubuntu2204 ubuntu2204    0 zář 22 14:51 <span style="background-color:#C01C28"><font color="#D0CFCC">runme.sh</font></span>
-rwx--x--x 1 ubuntu2204 ubuntu2204    0 zář 22 14:42 <font color="#26A269"><b>script.sh</b></font>
-rw-rw-rw- 1 ubuntu2204 ubuntu2204    0 zář 22 14:47 sdilene.txt
-rw------- 1 ubuntu2204 ubuntu2204    0 zář 22 14:46 tajny.log
drwxrwxr-- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:48 <font color="#12488B"><b>team</b></font>
-rw-r----- 1 ubuntu2204 ubuntu2204    0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir skupinaA sdilene
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 16
-rw-rw-r-- 1 ubuntu2204 ubuntu2204    0 zář 22 14:52 file
drwx--x--- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:44 <font color="#12488B"><b>projekty</b></font>
-rwsrw-r-- 1 ubuntu2204 ubuntu2204    0 zář 22 14:51 <span style="background-color:#C01C28"><font color="#D0CFCC">runme.sh</font></span>
-rwx--x--x 1 ubuntu2204 ubuntu2204    0 zář 22 14:42 <font color="#26A269"><b>script.sh</b></font>
drwxrwxr-x 2 ubuntu2204 ubuntu2204 4096 zář 22 14:53 <font color="#12488B"><b>sdilene</b></font>
-rw-rw-rw- 1 ubuntu2204 ubuntu2204    0 zář 22 14:47 sdilene.txt
drwxrwxr-x 2 ubuntu2204 ubuntu2204 4096 zář 22 14:53 <font color="#12488B"><b>skupinaA</b></font>
-rw------- 1 ubuntu2204 ubuntu2204    0 zář 22 14:46 tajny.log
drwxrwxr-- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:48 <font color="#12488B"><b>team</b></font>
-rw-r----- 1 ubuntu2204 ubuntu2204    0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 2775 skupinaA/
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 1775 sdilene
sdilene/     sdilene.txt  
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 1775 sdilene/
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 16
-rw-rw-r-- 1 ubuntu2204 ubuntu2204    0 zář 22 14:52 file
drwx--x--- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:44 <font color="#12488B"><b>projekty</b></font>
-rwsrw-r-- 1 ubuntu2204 ubuntu2204    0 zář 22 14:51 <span style="background-color:#C01C28"><font color="#D0CFCC">runme.sh</font></span>
-rwx--x--x 1 ubuntu2204 ubuntu2204    0 zář 22 14:42 <font color="#26A269"><b>script.sh</b></font>
drwxrwxr-t 2 ubuntu2204 ubuntu2204 4096 zář 22 14:53 <span style="background-color:#12488B"><font color="#D0CFCC">sdilene</font></span>
-rw-rw-rw- 1 ubuntu2204 ubuntu2204    0 zář 22 14:47 sdilene.txt
drwxrwsr-x 2 ubuntu2204 ubuntu2204 4096 zář 22 14:53 <font color="#12488B"><b>skupinaA</b></font>
-rw------- 1 ubuntu2204 ubuntu2204    0 zář 22 14:46 tajny.log
drwxrwxr-- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:48 <font color="#12488B"><b>team</b></font>
-rw-r----- 1 ubuntu2204 ubuntu2204    0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 1777 sdilene/
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 16
-rw-rw-r-- 1 ubuntu2204 ubuntu2204    0 zář 22 14:52 file
drwx--x--- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:44 <font color="#12488B"><b>projekty</b></font>
-rwsrw-r-- 1 ubuntu2204 ubuntu2204    0 zář 22 14:51 <span style="background-color:#C01C28"><font color="#D0CFCC">runme.sh</font></span>
-rwx--x--x 1 ubuntu2204 ubuntu2204    0 zář 22 14:42 <font color="#26A269"><b>script.sh</b></font>
drwxrwxrwt 2 ubuntu2204 ubuntu2204 4096 zář 22 14:53 <span style="background-color:#26A269"><font color="#171421">sdilene</font></span>
-rw-rw-rw- 1 ubuntu2204 ubuntu2204    0 zář 22 14:47 sdilene.txt
drwxrwsr-x 2 ubuntu2204 ubuntu2204 4096 zář 22 14:53 <font color="#12488B"><b>skupinaA</b></font>
-rw------- 1 ubuntu2204 ubuntu2204    0 zář 22 14:46 tajny.log
drwxrwxr-- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:48 <font color="#12488B"><b>team</b></font>
-rw-r----- 1 ubuntu2204 ubuntu2204    0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ 
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch skript1.sh
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l skript1.sh
-rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 zář 22 15:01 skript1.sh
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 4755 skript1.sh
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l skript1.sh
-rwsr-xr-x 1 ubuntu2204 ubuntu2204 0 zář 22 15:01 <span style="background-color:#C01C28"><font color="#D0CFCC">skript1.sh</font></span>
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l skript1.sh file
-rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 zář 22 14:52 file
-rwsr-xr-x 1 ubuntu2204 ubuntu2204 0 zář 22 15:01 <span style="background-color:#C01C28"><font color="#D0CFCC">skript1.sh</font></span>
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch skript2.sh
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l skript2.sh
-rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 zář 22 15:06 skript2.sh
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 2764 skript2.sh
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l skript2.sh
-rwxrwSr-- 1 ubuntu2204 ubuntu2204 0 zář 22 15:06 <span style="background-color:#A2734C"><font color="#171421">skript2.sh</font></span>
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir public_dir
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 1777 public_dir/
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
celkem 20
-rw-rw-r-- 1 ubuntu2204 ubuntu2204    0 zář 22 14:52 file
drwx--x--- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:44 <font color="#12488B"><b>projekty</b></font>
drwxrwxrwt 2 ubuntu2204 ubuntu2204 4096 zář 22 15:11 <span style="background-color:#26A269"><font color="#171421">public_dir</font></span>
-rwsrw-r-- 1 ubuntu2204 ubuntu2204    0 zář 22 14:51 <span style="background-color:#C01C28"><font color="#D0CFCC">runme.sh</font></span>
-rwx--x--x 1 ubuntu2204 ubuntu2204    0 zář 22 14:42 <font color="#26A269"><b>script.sh</b></font>
drwxrwxrwt 2 ubuntu2204 ubuntu2204 4096 zář 22 14:53 <span style="background-color:#26A269"><font color="#171421">sdilene</font></span>
-rw-rw-rw- 1 ubuntu2204 ubuntu2204    0 zář 22 14:47 sdilene.txt
-rwsr-xr-x 1 ubuntu2204 ubuntu2204    0 zář 22 15:01 <span style="background-color:#C01C28"><font color="#D0CFCC">skript1.sh</font></span>
-rwxrwSr-- 1 ubuntu2204 ubuntu2204    0 zář 22 15:06 <span style="background-color:#A2734C"><font color="#171421">skript2.sh</font></span>
drwxrwsr-x 2 ubuntu2204 ubuntu2204 4096 zář 22 14:53 <font color="#12488B"><b>skupinaA</b></font>
-rw------- 1 ubuntu2204 ubuntu2204    0 zář 22 14:46 tajny.log
drwxrwxr-- 2 ubuntu2204 ubuntu2204 4096 zář 22 14:48 <font color="#12488B"><b>team</b></font>
-rw-r----- 1 ubuntu2204 ubuntu2204    0 zář 22 14:39 test1.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ 
</pre>

