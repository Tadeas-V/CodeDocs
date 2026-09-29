# 02-09-25 — H01

`whoami` je pro zjištění, jak se jmenujeme jako uživatel  

## **Parametr se píše pomocí `-`**
`who -a` zjišťuje kolik uživatelů je v Linuxu...  
- Linux je multi-uživatelský  
- `-a` je parametr, který ukáže uživatele  
- `-b` je parametr pro startování (boot)  

## `ls` list -> tzv. vylistuj (ukáže vše?)
- `ls -l` -> dlouhý výpis (vypíše i datumy)  
- `d` znamená složka  
- `-` soubor  
- vlastník (první trojce)  
- skupina (druhá trojce)  
- všechno (zbytek)  
- číslo počet odkazů na adresář či soubor...  
- `ls -a` ukazuje skryté soubory (./~~~)  


## Parametry se dají i kombinovat
Např.: `ls -la`  

`ls /` -> vypíše kořenový adresář (složka)  
`ls /bin` -> příkazy existující Linuxu  

`cd` je pro přesun  
`cd /` -> přesune do kořenového adresáře  
`cd ..` / `cd /home` -> domovský adresář (umístění našeho místa ("ubuntu2204"))  
`cd -` -> předchozí adresář  
`cd ~/` -> Dostane nás do domovského adresáře  

`man ...` vypíše všechny parametry zadaného příkazu  
- Pro vyskočení (ukončení) je `q`  

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 09-09-25 — H02
`/` -> Kořenový adresář [KřA]  
`~/` -> Domovský adresář [DmA] (AltGr + a / PageDown)  
`/home/ubuntu2204(/...)` -> `DmA`   => `~/`
`cd` / `cd ~/` -> Cesta do `DmA`  
`cd /` -> Cesta do `KořA`  

`touch (soubor)` -> vytvoří soubor (bez přípony) – můžeme vytvořit i více  
`rm (soubor)` -> vymazání souboru (bez ptaní)  
`rm *` -> smaže se vše (pozor, kde jsme)  
    `*` -> znamená vše (platí pro vše)  
`mkdir (soubor)` -> Vytvoření adresáře (make directory) – můžeme vytvořit i více  
   `~/Plocha/(soubor)` -> princip vytvoření odkudkoliv  
`rmdir (adresář)` -> Maže prázdný adresář – může mazat i více  
`rm -R (adresář)` -> Mazání pro neprázné – může mazat i více  

> **T01**  
> * a) Nejprve na `Plocha` vytvoříme Složku `Skola`  
> * b) Přemístíme se do složky `Skola`  
> * c) Vytvoříme v ní dva soubory (třeba `zkouska1`, `zkouska2`)  
> * d) A vypíšeme jeho obsah  
> * e) Nyní složku `Skola` vymažeme (Pozor abychom nestáli ve složce, kterou chcceme mazat!)  

## Parametry `touch`:  
`touch -d "(datum) (souboru)"` -> změní datum vytvoření u zadaného souboru  
`touch -m (soubor)` -> dá souboru aktualní datum  

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 16-09-25 — H03
`soffice (soubor)` -> otevře soubor  
`cat (soubor)` -> vypisuje obsah souboru  
`tac (soubor)` -> vypíše obsah v souboru pozpátku (obrácené pořadí)  
`echo "(text)" >> (soubor)` -> vloží text na konec (neporuší)  
`echo "(text)" > (soubor)` -> vloží text na začátek, ale smaže, vše za ním (přemaže)  
`cat (soubor) > (soubor)` -> přesměruje obsah ze souboru A do souboru B (vytvoří neexistuje-li)  
`echo "(text)" >  (soubor)` -> vytvoří se soubor X s textem  
`history` -> ukáže history příkazů, bez jijich provedení (čistá historie "požadavků")  

> **T02**  
> * a) Přesuňte se do domovského adresáře.  
> * b) V adresáři Plocha vytvořte 3 adresáře ADR1, ADR2, ADR3.  
> * c) Přesuňte se do ADR2.  
> * d) V adresáři ADR2 vytvořte 2 soubory soub1 a soub2.  
> * e) Vypište ADR2 s právy a časem vytvoření (dlouhý zápis).  
> * f) Otevřete soubor soub1 jako textový soubor v LibreOffice a nakopírujte tak 6 řádků ze začátku terminálu.  
> * g) Výstu ze souboru soub1 přesměrujte do souboru soub3, který umístíte přímo do domovského adresáře.  
> * h) Vypište obsah souboru soub3 na obrazovku.  
> * i) Na konec souboru vložte text "Jsem OK" (v termínu)  
> * j) Vypište soubor soub3.  

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 23-09-25 H04
`cp (soubor) (soubor)` -> vytvoří kopii souboru  
`cp  (soubor) (soubor) (cesta)` -> kopíruje soubor jinam  
`cp -r (ard) (cesta)` -> zkopíruje složku jinam  

`head (soubor)` -> vypíše 1. 10 řádků ze souboru [defaul]  
`head -n(num) (soubor)` -> vypíše "num" řádků ze souboru (`-n#` je přepínač)  

`tail (soubor)` -> vypíše 10 řádků od konce souboru [defaul]  
`tail -n(num) (soubor)` -> vypíše "num" řádků od konce souboru  

`mv (soubor/adr) (cesta)` -> přemístí soubor nebo adresář (složku) na jiné místo  

> **T03**  
> * a) Přesuň se do domovského adr.  
> * b) Vytvoř adresář ADR1, ADR2 a ADR3.  
> * c) Přesuň se do adresáře ADR2.  
> * d) Vytvoř v ADR2 soubory soub1 a soub2.  
> * e) Vypište ADR2 s právy a časem vytvoření.  
> * f) Otevři soub1 v LibreOffice a zkopíruj do něj prvních 6 řádků terminálu.  
> * g) Přemísti obsah SOUB1 do nového souburu SOUB3 umístěný na domovském adresáři.  
> * h) Vypiš obsah SOUB3.  
> * i) Na konci SOUB3 vlož "Jsem OK" (v terminálu).  
> * j) Vypiš obsah SOUB3.  


# 30-09-25 H05
### **T04**  
* a) Přepněte se do domovského adresáře.  
* b) Vytvořte na domovském adresáři adr Eva.  
* c) V Eva vytvořte e1, e2 a e3.  
* d) Do e1 nakopírujte dosavadní terminál a uložte.  
* e) na obrazovku vypište první 2 řádky e1.  
* f) Obsah souboru e1 přesuňte do DmA do souboru cool a smažte e1.  
* g) Vypište cool f4 a umístěte jej do Eva.  
* h) Vložte do e3 text "jsem magic" a vypište jej do terminálu.  
* i) Přesuňte e3 na DmA a smažte adr Eva a vypište DmA.  
    
`sudo (příkaz)` -> povolí (administrátora…)  
    `sudu mkdir (soubor)` -> povolí vytvořit adr-(soubor) na Kořenovým adresáři (po prvním vyžádání hesla)  
    * v `ls -l` vypisuje `root` místo `ubunto2204`, jelikož byl vytvořen a zkopírován z KořA (Kořenový adresář)  
`sudo chmod 777 T1` -> Vytvoří práva pro soubor T1, vytvořený v `root`  
    * `777` vytvoří veškerá práva pro soubor T1  
    * `000` vymaže (zruší) veškerá práva pro soubor T1 (! POZOR: Můžeme si zakázat práva pro samotný DmA)  


> **T05**  
> * a) V KořA vytvoř adresár BOB.  
> * b) V BOB vytvoř soubory b1, b2 a b3.  
> * c) Adr. BOB přesuň na Plochu a vypiš DmA.  
> * d) Do b3 vložte 6 řádků z terminálu a přesuňte b3 do KořA.  
> * e) Na konec b3 vložte text "S maturiout v kapse je to snadné".  

### goat:
```bash
ubuntu2204@ubuntu-20:/$ sudo chmod 777 ~/BOB
[sudo] heslo pro ubuntu2204: 
ubuntu2204@ubuntu-20:/$ soffice ~/BOB/b3
Warning: failed to launch javaldx - java may not function correctly
ubuntu2204@ubuntu-20:/$ soffice ~/Plocha/BOB/b3
Warning: failed to launch javaldx - java may not function correctly
ubuntu2204@ubuntu-20:/$ mv ~/Plocha/BOB/b3 /
mv: nelze přesunout '/home/ubuntu2204/Plocha/BOB/b3' do '/b3': Operace zamítnuta
ubuntu2204@ubuntu-20:/$ sudo mv ~/Plocha/BOB/b3 /
ubuntu2204@ubuntu-20:/$ echo "S maturitou v kapse je to snadné" >> ~/Plocha/BOB/b3
ubuntu2204@ubuntu-20:/$ tail -1 ~/Plocha/BOB/b3
S maturitou v kapse je to snadné
ubuntu2204@ubuntu-20:/$ cp /b3 ~/b3
ubuntu2204@ubuntu-20:/$ cat ~/b3 ~/Plocha/final
ubuntu2204@ubuntu-20:/$ sudo chmod 777 ~/BOB
[sudo] heslo pro ubuntu2204: 
ubuntu2204@ubuntu-20:/$ soffice ~/BOB/b3
Warning: failed to launch javaldx - java may not function correctly
ubuntu2204@ubuntu-20:/$ soffice ~/Plocha/BOB/b3
Warning: failed to launch javaldx - java may not function correctly
cat: /home/ubuntu2204/Plocha/final: Adresář nebo soubor neexistuje
ubuntu2204@ubuntu-20:/$ sudo chmod 777 ~/b3
ubuntu2204@ubuntu-20:/$ cat ~/b3 ~/Plocha/final
ubuntu2204@ubuntu-20:/$ sudo chmod 777 ~/BOB
[sudo] heslo pro ubuntu2204: 
ubuntu2204@ubuntu-20:/$ soffice ~/BOB/b3
Warning: failed to launch javaldx - java may not function correctly
ubuntu2204@ubuntu-20:/$ soffice ~/Plocha/BOB/b3
Warning: failed to launch javaldx - java may not function correctly
cat: /home/ubuntu2204/Plocha/final: Adresář nebo soubor neexistuje
ubuntu2204@ubuntu-20:/$ touch ~/Plocha/final
ubuntu2204@ubuntu-20:/$ cat ~/b3 ~/Plocha/final
ubuntu2204@ubuntu-20:/$ sudo chmod 777 ~/BOB
[sudo] heslo pro ubuntu2204: 
ubuntu2204@ubuntu-20:/$ soffice ~/BOB/b3
Warning: failed to launch javaldx - java may not function correctly
ubuntu2204@ubuntu-20:/$ soffice ~/Plocha/BOB/b3
Warning: failed to launch javaldx - java may not function correctly
ubuntu2204@ubuntu-20:/$ ls -l ~/
celkem 48
drwxrwxrwx 2 root       root       4096 zář 30 10:59 BOB
-rwxrwxrwx 1 ubuntu2204 ubuntu2204  303 zář 30 11:07 b3
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Dokumenty
-rw-rw-r-- 1 ubuntu2204 ubuntu2204   11 zář 30 10:00 e3
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Hudba
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Obrázky
drwxr-xr-x 3 ubuntu2204 ubuntu2204 4096 zář 30 11:09 Plocha
drwx------ 8 ubuntu2204 ubuntu2204 4096 zář  8  2023 snap
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Stažené
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Šablony
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Veřejné
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Videa
ubuntu2204@ubuntu-20:/$ cat ~/b3 ~/Plocha/final
ubuntu2204@ubuntu-20:/$ sudo chmod 777 ~/BOB
[sudo] heslo pro ubuntu2204: 
ubuntu2204@ubuntu-20:/$ soffice ~/BOB/b3
Warning: failed to launch javaldx - java may not function correctly
ubuntu2204@ubuntu-20:/$ soffice ~/Plocha/BOB/b3
Warning: failed to launch javaldx - java may not function correctly
ubuntu2204@ubuntu-20:/$ cat ~/b3 > ~/Plocha/final
ubuntu2204@ubuntu-20:/$ mkdir -R ~/Plocha/BOB
mkdir: neplatný přepínač – „R“
Více informací získáte příkazem „mkdir --help“.
ubuntu2204@ubuntu-20:/$ mrdir -R ~/Plocha/BOB
Příkaz „mrdir“ nebyl nalezen, možná jste měli na mysli:
  příkaz „mmdir“ z deb balíčku simh (3.8.1-6.1)
  příkaz „mdir“ z deb balíčku mtools (4.0.33-1+really4.0.32-1build1)
  příkaz „mkdir“ z deb balíčku coreutils (8.32-4.1ubuntu1.2)
  příkaz „rmdir“ z deb balíčku coreutils (8.32-4.1ubuntu1.2)
Vyzkoušejte: sudo apt install <název deb balíčku>
ubuntu2204@ubuntu-20:/$ mr -R ~/Plocha/BOB
Příkaz „mr“ nebyl nalezen, ale je možné ho nainstalovat pomocí:
sudo apt install myrepos
ubuntu2204@ubuntu-20:/$ rmdir -R ~/Plocha/BOB
rmdir: neplatný přepínač – „R“
Více informací získáte příkazem „rmdir --help“.
ubuntu2204@ubuntu-20:/$ rmdir ~/Plocha/BOB
rmdir: odstranění '/home/ubuntu2204/Plocha/BOB' selhalo: Adresář není prázdný
ubuntu2204@ubuntu-20:/$ rm -R ~/Plocha/BOB
ubuntu2204@ubuntu-20:/$ ls -l ~/
celkem 48
drwxrwxrwx 2 root       root       4096 zář 30 10:59 BOB
-rwxrwxrwx 1 ubuntu2204 ubuntu2204  303 zář 30 11:07 b3
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Dokumenty
-rw-rw-r-- 1 ubuntu2204 ubuntu2204   11 zář 30 10:00 e3
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Hudba
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Obrázky
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář 30 11:12 Plocha
drwx------ 8 ubuntu2204 ubuntu2204 4096 zář  8  2023 snap
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Stažené
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Šablony
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Veřejné
drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 Videa
ubuntu2204@ubuntu-20:/$ rm -R ~/Plocha/final
ubuntu2204@ubuntu-20:/$ 
```
<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 14-10-25 H06
**interní info:**  
`man --help` nebo `man -?` -> vypíše pomocný popis všechn možných parametru daného příkazu  
    - místo man lze použít i jiný příkaz, avšak pouze s `--help`  
`man --usage` -> poskytne stručný přehled popisu  
`man (příkaz)` -> vypíše manuál příkazu  
`cat -A (soubor)` -> vypíše celý soubor s `$` na konci (nejspíše odsazení pro řádek; podoba `\n` v Py)  
`cat -b (soubor)` -> vypíše celý soubor s očíslením popsaných řádků  
`cat -n (soubor)` -> vypíše celý soubor s očíslením všech řádků  
`cat -s (soubor)` -> redukuje několik následujících prízdných řádků na jeden  

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 21-10-25 H07  
**Změna práva** pomocí `chmod`:  
> chmod o+rx jméno_souboru
    
`u` user    -> uživatel (vlastník)  
`g` group   -> skupina  
`o` other   -> ostatní  
`a` all     -> všichni  

`+` add     -> přidá  
`-` remove  -> odebere  
`=` komplet -> nastavení práva  

`r` read    -> čtení  
`w` write   -> zápis (psaní)  
`x` execute -> právo spouštět a vstupu do adresáře/souboru  

**právo   hodnota**  
`r`     4  
`w`     2  
`x`     1  

```bash
 u   g   o 
rwx rwx rwx
421 421 421
-7- -7- -7-
```

**hodnota:**  
`546` → `4-1 4-- 42-` → `r-x r-- rw-`  

…i pro složky s parametrem `-R`  
    
`chmod o+w (soubor)` -> přidá "zápis" pro ostatní  
`chmod a=rwx (soubor)` -> dá všemu vše  
`chmod -R o+777 (složka)` -> dá adresáři všechna práva  

    > **T06**
        > * a) V kořA vytvořte adr BOB.
        > * b) V adr BOB vytvoř tři soubory b1, b2 a b3.
        > * c) 
        > * d) 
        > * e) 
        > * f) 
        > * g) 
        > * h) 
        > * i) 
        > * j) 

        **Řešení:**
            ```bash
            …~$ sudo mkdir /BOB
            …~$ cd /BOB/
            …/BOB$ sudo touch b1 b2 b3
            …/BOB$ sudo mv /BOB ~/Plocha
            …/BOB$ ls ~/
            ...
            …/BOB$ sudo chmod 777 ~/Plocha/BOB/b3
            …/BOB$ gedit b3                                -> otevírá jako průzkumník
            …/BOB$ sudo mv ~/Plocha/BOB/b3 /
            …/BOB$ sudo echo "S maturitou v kapse je to snadné" >> /b3
            …/BOB$ sudo tail -n1 /b3
            S maturitou v kapse je to snadné
            …/BOB$ sudo cp /b3 ~/
            …/BOB$ sudo chmod 777 b3
            …/BOB$ cat ~/b3 > ~/Plocha/final
            …/BOB$ cat ~/Plocha/final
            …/BOB$ cd ..
            …~/Plocha$ ls
            …~/Plocha$ (sudo) rm -r BOB
            …~/Plocha$ ls -l ~/
            ...
            ```
    
    > **T07**
        > * a) 
        > * b) 
        > * c) 
        > * d) 
        > * e) 
        > * f) 
        > * g) 
        > * h) 
        > * i) 
        > * j) 

        **Řešení:**
            ubuntu2204@ubuntu-20:~$ sudo mkdir /STUDENT
            ubuntu2204@ubuntu-20:~$ cd /STUDENT
            ubuntu2204@ubuntu-20:/STUDENT$ touch co1 co2 co3
            touch: nelze se dotknout (provést příkaz „touch“) 'co1': Operace zamítnuta
            touch: nelze se dotknout (provést příkaz „touch“) 'co2': Operace zamítnuta
            touch: nelze se dotknout (provést příkaz „touch“) 'co3': Operace zamítnuta
            ubuntu2204@ubuntu-20:/STUDENT$ sudo touch co1 co2 co3
            ubuntu2204@ubuntu-20:/STUDENT$ sudo chmod a=777
            chmod: po „a=777“ chybí operand
            Více informací získáte příkazem „chmod --help“.
            ubuntu2204@ubuntu-20:/STUDENT$ sudo chmod 777 b1
            chmod: nelze přistoupit k 'b1': Adresář nebo soubor neexistuje
            ubuntu2204@ubuntu-20:/STUDENT$ sudo chmod 777 /STUDENT/b1
            chmod: nelze přistoupit k '/STUDENT/b1': Adresář nebo soubor neexistuje
            ubuntu2204@ubuntu-20:/STUDENT$ ls /STUDENT
            co1  co2  co3
            ubuntu2204@ubuntu-20:/STUDENT$ sudo chmod 777 /STUDENT/co1
            ubuntu2204@ubuntu-20:/STUDENT$ gedit co1
            ubuntu2204@ubuntu-20:/STUDENT$ echo "jedna a jedna" >> co1
            ubuntu2204@ubuntu-20:/STUDENT$ tail -n2 co1
            
            jedna a jedna
            ubuntu2204@ubuntu-20:/STUDENT$ cp co2 ~/Plocha
            ubuntu2204@ubuntu-20:/STUDENT$ sudo chmod 777 ~/Plocha/co2
            ubuntu2204@ubuntu-20:/STUDENT$ echo "jsem nejlepší >> ~/Plocha/co2
            > ^C
            ubuntu2204@ubuntu-20:/STUDENT$ echo "jsem nejlepší" >> ~/Plocha/co2
            ubuntu2204@ubuntu-20:/STUDENT$ cat ~/Plocha/co2
            jsem nejlepší
            ubuntu2204@ubuntu-20:/STUDENT$ ls -l
            celkem 4
            -rwxrwxrwx 1 root root 310 říj 21 10:50 co1
            -rw-r--r-- 1 root root   0 říj 21 10:48 co2
            -rw-r--r-- 1 root root   0 říj 21 10:48 co3
            ubuntu2204@ubuntu-20:/STUDENT$ echo "celkem 4
            -rwxrwxrwx 1 root root 310 říj 21 10:50 co1
            -rw-r--r-- 1 root root   0 říj 21 10:48 co2
            -rw-r--r-- 1 root root   0 říj 21 10:48 co3" >> ~/Plocha/zk3
            ubuntu2204@ubuntu-20:/STUDENT$ cat ~/Plocha/zk3
            celkem 4
            -rwxrwxrwx 1 root root 310 říj 21 10:50 co1
            -rw-r--r-- 1 root root   0 říj 21 10:48 co2
            -rw-r--r-- 1 root root   0 říj 21 10:48 co3
            ubuntu2204@ubuntu-20:/STUDENT$ 

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 04-11-25 H08
| Právo | Účel            |
| :-    | :-              |
| 4000  | SUID            |
| 2000  | SGID            |
| 1000  | sticky bit      |
| 0400  | r pro vlastníka |
| 0200  | w pro vlastníka |
| 0100  | x pro vlastníka |
| 0070  | rwx pro skupinu |
| 0007  | rwx pro ostatní |

``

**SUID (Set User ID)**
> Když je nastaven, tento bit způsobí, že při spouštění pragram bude prováděn s právy vlastníka souborů, nokoli uživatelem, který jej spustil.
> **Př.:** Program jako `passwd`, který mění heslo uživatele, mohou mít nastavený tento bit, aby program spustil s právy sprácce, i když je spuštěn obyčejným uživatelem.

**SGID (Set Group ID)**
> Když je nastaven, tento bit způsobí, že při spouštění pragram bude prováděn s právy skupiny, nokoli uživatele, který spustil.
> **Pro adresíře:** Pokud je nastaven na adresář, všechny soubory vytvořené v tomto adresáři budou mít jako výchozí skupinu nastavenou skupinu tohoto adresáře, nikoli skupinu uživatele.

**Sticky Bit**
> Když je nastaven, tento bit se obvykle používá u adresářů. Pokud je nastaven na adresář, pouze vlastní souboru nebo root může soubor v tomto adresáři smazat, i když ostatní uživatelé mají práva zápisu.
> **Př. použití:** Tento bit je běžně používaný na adresáře jako `tmp`, kde mají přístup různí uživatelé, ale chtějí zajistit, že si nebudou vzájemně mazat soubory.

## Zápis v oktanovém (osmičkovém) formátu [OktanF]
- V oktanF se používá trojce čísel pro nastavení oprávnění, kde:
    - První číslice (Pro *SUID*, *SGID* či *Stycky Bit*) je číselná hodnota 4 (*SUID*), 2 (*SGID*) a 1 (*Sticky Bit*).
    - Pokud je některý z těchto bytů nastaven, přičítá se k odpovídající číslici (což dává řádně vyšší číslo, než obvykle pro běžná oprávnění).

**Např.:**
    - `chmod 4755 soubor` - Nastaví SUID bit a soubor bude mít oprávnění pro vlastníka číst, zapisovat i spouštět, zacímco ostatní uživatelé budou mít pouze právo číst a spouštět.
    - V podstatě jde o to, že SUID umožní, aby soubotr vykonával akce s vyššími právy než běžný uživatel, který ho spustí.  To se používa např. u systémových nástrojů jako `/usrbin/passwd`, který umožňuje uživatelům měnit heslo.

> **T08**  
> * a) Vytvořte adresář `/home/ubuntu2204/cv14`  
> * b) Nastavte si adresář jako běžný. V běžném vytvořte (prázdné) souboru:  
    - `1542f.txt`  
    - `5b416.txt`  
    - `b22c4.txt`  

## Řešení:
```bash
~$ mkdir cv14
~/cv14$ cd cv14
~/cv14$ touch 1542f.txt 5b416.txt b22c4.txt
~/cv14$ chmod 0661 *
~/cv14$ 
```


> **T09**  
    > * a) Vytvořte adresář `cv15cd`.  
    > * b) V adresáři vytvoř podadresáře `5ba`, `5bb` a `5bc`.  
    > * c) Podadresáři odeber všechna přístupová práva, aby ve výpisu bylo:
        > `d--------- 2 ubuntu2204 ubuntu2204 … 5bc`

```bash
~$ mkdir cv15cd   
~$ cd cv15cd
~/cv15cd$ mkdir 5ba 5bb 5bc
~/cv15cd$ chmod 000 5bc
~/cv15cd$ ls -l
celkem 12
drwxrwxr-x 2 ubuntu2204 ubuntu2204 4096 lis  4 10:25 5ba
drwxrwxr-x 2 ubuntu2204 ubuntu2204 4096 lis  4 10:25 5bb
d--------- 2 ubuntu2204 ubuntu2204 4096 lis  4 10:25 5bc
```

<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv15cd</b></font>$ mtouch 5ba/obycejny 5ba/spustitelny 5bb/obycejny 5bb/spustiteny
    Příkaz „mtouch“ nebyl nalezen, možná jste měli na mysli:
      příkaz „ktouch“ ze snap balíčku ktouch (23.04.2)
      příkaz „ktouch“ z deb balíčku ktouch (4:21.12.3-1ubuntu1)
      příkaz „vmtouch“ z deb balíčku vmtouch (1.3.1-2)
      příkaz „touch“ z deb balíčku coreutils (8.32-4.1ubuntu1.2)
    Další verze viz „snap info &lt;název snap balíčku&gt;“.
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv15cd</b></font>$ touch 5ba/obycejny 5ba/spustitelny 5bb/obycejny 5bb/spustiteny
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv15cd</b></font>$ chmod u+x 5ba/spustitelny 5bb/spustiteny
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv15cd</b></font>$ mkdir 5ba/adresar 5bb/adesar
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv15cd</b></font>$ chmod go-rwx 5ba/* 5bb/*
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv15cd</b></font>$ ls -lR
    .:
    celkem 12
    drwxrwxr-x 3 ubuntu2204 ubuntu2204 4096 lis  4 10:50 <font color="#12488B"><b>5ba</b></font>
    drwxrwxr-x 3 ubuntu2204 ubuntu2204 4096 lis  4 10:50 <font color="#12488B"><b>5bb</b></font>
    d-wx-wx-wx 2 ubuntu2204 ubuntu2204 4096 lis  4 10:25 <span style="background-color:#26A269"><font color="#12488B">5bc</font></span>


    ./5ba:
    celkem 4
    drwx------ 2 ubuntu2204 ubuntu2204 4096 lis  4 10:50 <font color="#12488B"><b>adresar</b></font>
    -rw------- 1 ubuntu2204 ubuntu2204    0 lis  4 10:48 obycejny
    -rwx------ 1 ubuntu2204 ubuntu2204    0 lis  4 10:48 <font color="#26A269"><b>spustitelny</b></font>


    ./5ba/adresar:
    celkem 0

    ./5bb:
    celkem 4
    drwx------ 2 ubuntu2204 ubuntu2204 4096 lis  4 10:50 <font color="#12488B"><b>adesar</b></font>
    -rw------- 1 ubuntu2204 ubuntu2204    0 lis  4 10:48 obycejny
    -rwx------ 1 ubuntu2204 ubuntu2204    0 lis  4 10:48 <font color="#26A269"><b>spustiteny</b></font>


    ./5bb/adesar:
    celkem 0
    ls: adresář &apos;./5bc&apos; nelze otevřít: Operace zamítnuta
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv15cd</b></font>$ chmod ugo+x 5ba/*
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv15cd</b></font>$ chmod ugo+X 5bb/*
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv15cd</b></font>$ ls -lR
    .:
    celkem 12
    drwxrwxr-x 3 ubuntu2204 ubuntu2204 4096 lis  4 10:50 <font color="#12488B"><b>5ba</b></font>
    drwxrwxr-x 3 ubuntu2204 ubuntu2204 4096 lis  4 10:50 <font color="#12488B"><b>5bb</b></font>
    d-wx-wx-wx 2 ubuntu2204 ubuntu2204 4096 lis  4 10:25 <span style="background-color:#26A269"><font color="#12488B">5bc</font></span>

    ./5ba:
    celkem 4
    drwx--x--x 2 ubuntu2204 ubuntu2204 4096 lis  4 10:50 <font color="#12488B"><b>adresar</b></font>
    -rwx--x--x 1 ubuntu2204 ubuntu2204    0 lis  4 10:48 <font color="#26A269"><b>obycejny</b></font>
    -rwx--x--x 1 ubuntu2204 ubuntu2204    0 lis  4 10:48 <font color="#26A269"><b>spustitelny</b></font>

    ./5ba/adresar:
    celkem 0

    ./5bb:
    celkem 4
    drwx--x--x 2 ubuntu2204 ubuntu2204 4096 lis  4 10:50 <font color="#12488B"><b>adesar</b></font>
    -rw------- 1 ubuntu2204 ubuntu2204    0 lis  4 10:48 obycejny
    -rwx--x--x 1 ubuntu2204 ubuntu2204    0 lis  4 10:48 <font color="#26A269"><b>spustiteny</b></font>

    ./5bb/adesar:
    celkem 0
    ls: adresář &apos;./5bc&apos; nelze otevřít: Operace zamítnuta
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv15cd</b></font>$ 
</pre>

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 11-11-25 H09

## Procvičování
<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch test1.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 640 text1.txt
    chmod: nelze přistoupit k &apos;text1.txt&apos;: Adresář nebo soubor neexistuje
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 640 test1.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch script.sh
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 711 script.sh
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir projekty
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod -R 710
    chmod: po „710“ chybí operand
    Více informací získáte příkazem „chmod --help“.
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod -R 710 projekty
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch tajny.log
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 600 tajny.log
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch sdilene.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 666 sdilene.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir team
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 774 team
</pre>

<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir /tmp/shared
    <font color="#aaa"><p>Nastavte <i>sticky bit</i> na adresář:</p></font>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod +t /tmp/shared
    <font color="#aaa"><p>Zkontroluj, zda <i>sticky bit</i> byl nastaven:</p></font>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -ld /tmp/shared
    <font color="#aaa"><p>Výstup by měl vypadat nějak takto:</p></font>
    drwxrwxr-t 2 ubuntu2204 ubuntu2204 4096 lis 11 10:45 <span style="background-color:#12488B"><font color="#D0CFCC">/tmp/shared</font></span>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ 
</pre>

```bash
mkdir ~/data
cd ~/data
echo "Tajny obsah" > tajne.txt
chmod 710 ~/data
```

<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch test1.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 640 test1.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch script.sh
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 711 script.sh
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir projekty
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod -R 710 projekty
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch tajny.log
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 600 tajny.log
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch sdilene.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 666 sdilene.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir team
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 774 team
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch runme.sh
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 4100 runme.sh
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir skupinaA
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
    celkem 12
    drwx--x--- 2 ubuntu2204 ubuntu2204 4096 lis 11 09:56 <font color="#12488B"><b>projekty</b></font>
    ---s------ 1 ubuntu2204 ubuntu2204    0 lis 11 10:08 <span style="background-color:#C01C28"><font color="#D0CFCC">runme.sh</font></span>
    -rwx--x--x 1 ubuntu2204 ubuntu2204    0 lis 11 09:55 <font color="#26A269"><b>script.sh</b></font>
    -rw-rw-rw- 1 ubuntu2204 ubuntu2204    0 lis 11 10:03 sdilene.txt
    drwxrwxr-x 2 ubuntu2204 ubuntu2204 4096 lis 11 10:36 <font color="#12488B"><b>skupinaA</b></font>
    -rw------- 1 ubuntu2204 ubuntu2204    0 lis 11 09:57 tajny.log
    drwxrwxr-- 2 ubuntu2204 ubuntu2204 4096 lis 11 10:03 <font color="#12488B"><b>team</b></font>
    -rw-r----- 1 ubuntu2204 ubuntu2204    0 lis 11 09:53 test1.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 2775 skupinaA
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir sdilene
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 1177 sdilene
</pre>

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 18-11-25 H10

## Test skupina A
1. Vytvoř na ploše soubor `script1`
2. Vypiš adresář Plocha s právy a datem vytvoření (dlouhý výpis).
3. Nastav práva tak, aby:
- vlastník mohl číst, zapisovat i spouštět.
- skupina i ostatní mohli číst a spouštět.
- soubor se spouštěl s právy vlastníka.
4. Vypiš adresář Plocha s právy a datem vytvoření (dlouhý výpis), po změně práv.
5. Celý výpis terminálu vlož do souboru **`Své_jméno`** a uložte na sdílený disk.

<br>

### Bash vzhled skupiny A
```bash
cd ~/Plocha
touch script1
ls -l
chmod 4733 script1
ls -l
touch Tadeas_Vosyka.txt
soffice Tadeas_Vosyka.txt
```

### HTML vzhled skupiny A
<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cd ~/Plocha
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch script1
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
    celkem 8
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204    0 lis 18 10:35 script1
    drwxrwxr-x 2 ubuntu2204 ubuntu2204 4096 lis 18 10:34 <font color="#12488B"><b>test</b></font>
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204   12 lis 18 10:02 testik.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 4733 script1
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
    celkem 8
    -rws-wx-wx 1 ubuntu2204 ubuntu2204    0 lis 18 10:35 <span style="background-color:#C01C28"><font color="#D0CFCC">script1</font></span>
    drwxrwxr-x 2 ubuntu2204 ubuntu2204 4096 lis 18 10:34 <font color="#12488B"><b>test</b></font>
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204   12 lis 18 10:02 testik.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch Tadeas_Vosyka.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ soffice Tadeas_Vosyka.txt
</pre>

<br>

<br>

## Test skupina B
1. Vytvoř na ploše soubor `admin_tool`
2. Vypiš adresář Plocha s právy a datem vytvoření (dlouhý výpis).
3. Nastav práva tak, aby:
- vlastník i skupina mohl číst, zapisovat i spouštět.
- ostatní mohli číst a spouštět.
- soubor se spouštěl s právy vlastníka a skupiny.
4. Vypiš adresář Plocha s právy a datem vytvoření (dlouhý výpis), po změně práv.
5. Celý výpis terminálu vlož do souboru **`Své_jméno`** a uložte na sdílený disk.

<br>

### Bash vzhled skupiny B
```bash
cd ~/Plocha
touch admin_tool
ls -l
chmod 6775 admin_tool
ls -l
touch Tadeas_Vosyka.txt
soffice Tadeas_Vosyka.txt
```

### HTML vzhled
<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cd ~/Plocha
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch admin_tool
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
    celkem 0
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 lis 18 11:10 admin_tool
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ chmod 6775 admin_tool
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
    celkem 0
    -rwsrwsr-x 1 ubuntu2204 ubuntu2204 0 lis 18 11:10 <span style="background-color:#C01C28"><font color="#D0CFCC">admin_tool</font></span>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch Tadeas_Vosyka.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ soffice Tadeas_Vosyka.txt
</pre>

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 25-11-25 H11
## Tvrdé Odkazy (ln)
> V základním unixovém systému souborů jsou všechny soubory a adresáře v popsány v tabulce `i-uzlů` (`i-note`). Každý má své číslo, které pořadovým číslem položky v tabulce `i-note`. Tabulka je umístěna na začátku systému souborů a má pevnou velikost stanovenou při vytváření systémových souborů. V každém adresáři jsou dvojce: `jméno položky` (soubor nebo podadresář) a `číslo i-note`. Všechny ostatní údaje o souboru nebo adresáři (vyjma obsahu) jsou v `i-note`. Díky této konstrukci může na jeden soubor (tj. jeden `i-note`) ukazovat více jmen ze stejného adresáře či z různých adresářů.  
> Číslo `i-note` uvedené v adresáři je tzv. ‚tvrdým odkazem na soubor‘. Ukazuje-li na soubor více jmen, pak má soubor více těchto ‚tvrdých odkazů‘. Aktuální pořet tvrdých odkazů na soubor je uveden v tabulce `i-note`. Smazaním jména souboru v adresáři snížeme počet tvrdých odkazů o 1. Jakmile počet tvrdých odkazů dosáhne nulové hodnoty, systém položku `i-note` smaže včetně (vč.) dat.  
> Vytvoříme-li nový soubor, bude na něj ukazovat jeden tvrdý odkaz. počet tvrdých odkazů zjistíme z výpisu příkazu `ls -l (soubor)`.  
>
> `-rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 lis 25 10:06 newfile`  
> Kdy `1` je orávě tvrdý odkaz.  

`ls -l (soubor)` -> ukazuje počet tvrdých odkazů daného souboru  
`ls -li (soubor)*` -> vypíše `ls` s počtem odkazů daného souboru  
> když vytvoříme adresář, bode mít vždy dva tvrdé adresáře a nikdy více.  
> `./` -> sám sebe  
> `../` -> nadřzený adresář  
`ls -li (adresář)` -> vypíše vždy s 2 tvrdými odkazy  

<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ mkdir /home/ubuntu2204/c10
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cd /home/ubuntu2204/c10
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/c10</b></font>$ cd ~
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ls -l
    celkem 40
    drwxrwxr-x 2 ubuntu2204 ubuntu2204 4096 lis 25 10:44 <font color="#12488B"><b>c10</b></font>
    drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 <font color="#12488B"><b>Dokumenty</b></font>
    drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 <font color="#12488B"><b>Hudba</b></font>
    drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 <font color="#12488B"><b>Obrázky</b></font>
    drwxr-xr-x 3 ubuntu2204 ubuntu2204 4096 lis 25 10:37 <font color="#12488B"><b>Plocha</b></font>
    drwx------ 8 ubuntu2204 ubuntu2204 4096 zář  8  2023 <font color="#12488B"><b>snap</b></font>
    drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 <font color="#12488B"><b>Stažené</b></font>
    drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 <font color="#12488B"><b>Šablony</b></font>
    drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 <font color="#12488B"><b>Veřejné</b></font>
    drwxr-xr-x 2 ubuntu2204 ubuntu2204 4096 zář  8  2023 <font color="#12488B"><b>Videa</b></font>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ touch c10/bc65d.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ls -l c10
    celkem 0
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 lis 25 10:45 bc65d.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ chmod 777 c10
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ln ~/c10/bc65d.txt ~/c10/odkaz1
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ln ~/c10/bc65d.txt ~/c10/odkaz2
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ln ~/c10/bc65d.txt ~/c10/odkaz3
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ln ~/c10/bc65d.txt ~/c10/odkaz4
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ln ~/c10/bc65d.txt ~/c10/odkaz5
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ls -l ~/c10
    celkem 0
    -rw-rw-r-- 6 ubuntu2204 ubuntu2204 0 lis 25 10:45 bc65d.txt
    -rw-rw-r-- 6 ubuntu2204 ubuntu2204 0 lis 25 10:45 odkaz1
    -rw-rw-r-- 6 ubuntu2204 ubuntu2204 0 lis 25 10:45 odkaz2
    -rw-rw-r-- 6 ubuntu2204 ubuntu2204 0 lis 25 10:45 odkaz3
    -rw-rw-r-- 6 ubuntu2204 ubuntu2204 0 lis 25 10:45 odkaz4
    -rw-rw-r-- 6 ubuntu2204 ubuntu2204 0 lis 25 10:45 odkaz5
</pre>

`open (soubor/adresář)` -> Otevře soubor nebo adresář

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 02-12-25 H12
`ls -i` -> i-note

## Měkký odkaz
> Symbolický odkaz (též symlink nebo měkký odkaz) umožňuje na rozdíl tvrdého odkazu vytvářet také tvrdé odkazy na adresář a do jinéhoých systémů souborů. Vytvářením symblického odkazu nepřidáváme další odkazy k exustujícímu i-note, ale vznikne nový soubor typu symoblický odkaz, kterému se do dat vloží cíl, kam symbolický odkaz ukazuje.  
> Symbolický odkaz lze vytvořit na neexistující nebo nepřístupný objekt. Přístupová práva se na rozdíl od trvdého odkazu kontrolují až při použítí jej samotného (měkkého odkazu).

**Symbolický odkaz vytvoříme příkazem:**  
`ln -s (soubor/adresář) (soubor/adresář)` -> vytvoříme tak symbolický odkaz (soubor na který odkazujeme) (link, který odkazuje)
> Symlink vytvoří nový soubor, odkazující na určený soubor.


### Příklad:
<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cd ~/Plocha
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ touch existující
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ln -s existující novysymlink
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
    celkem 0
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  0 pro  2 09:57 existující
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204 12 pro  2 09:57 <font color="#2AA1B3"><b>novysymlink</b></font> -&gt; existující
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -li
    celkem 0
    1048646 -rw-rw-r-- 1 ubuntu2204 ubuntu2204  0 pro  2 09:57 existující
    1048648 lrwxrwxrwx 1 ubuntu2204 ubuntu2204 12 pro  2 09:57 <font color="#2AA1B3"><b>novysymlink</b></font> -&gt; existující
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir cv11
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ls -l
    celkem 4
    drwxrwxr-x 2 ubuntu2204 ubuntu2204 4096 pro  2 10:00 <font color="#12488B"><b>cv11</b></font>
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204    0 pro  2 09:57 existující
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204   12 pro  2 09:57 <font color="#2AA1B3"><b>novysymlink</b></font> -&gt; existující
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ cd cv11
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ touch soubor.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ls -s soubor.txt zástupce_soubor.txt
    ls: nelze přistoupit k &apos;zástupce_soubor.txt&apos;: Adresář nebo soubor neexistuje
    0 soubor.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ls -li
    celkem 0
    1048657 -rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 pro  2 10:01 soubor.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s soubor.txt zástupce_soubor.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ls -li
    celkem 0
    1048657 -rw-rw-r-- 1 ubuntu2204 ubuntu2204  0 pro  2 10:01 soubor.txt
    1048658 lrwxrwxrwx 1 ubuntu2204 ubuntu2204 10 pro  2 10:02 <font color="#2AA1B3"><b>zástupce_soubor.txt</b></font> -&gt; soubor.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ echo 1048657 &gt; soubor_inote.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ echo &quot;Jsem v cíli&quot; &gt; e2512.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ cat e2512.txt
    Jsem v cíli
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s e2512.txt ~/Plocha/1.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s ~/Plocha/1.txt ~/Plocha/cv11/start_e2512.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ cat ~/Plocha/cv11/start_e2512.txt
    cat: /home/ubuntu2204/Plocha/cv11/start_e2512.txt: Adresář nebo soubor neexistuje
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s cv11/e2512.txt
    ln: symbolický odkaz &apos;./e2512.txt&apos; nebylo možné vytvořit: Soubor již existuje
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s cv11/e2512.txt 1.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ cat 1.txt
    cat: 1.txt: Adresář nebo soubor neexistuje
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s cv11/e2512.txt ~/Plocha/1.txt
    ln: symbolický odkaz &apos;/home/ubuntu2204/Plocha/1.txt&apos; nebylo možné vytvořit: Soubor již existuje
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ cat ~/Plocha/1.txt
    cat: /home/ubuntu2204/Plocha/1.txt: Adresář nebo soubor neexistuje
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ cd ~/Plocha
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ ln -s cv11/e2512.txt 1.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ cat 1.txt
    Jsem v cíli
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ cd cv11
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s ../1.txt start_e2512.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ cat start_e2512.txt
    Jsem v cíli
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ touch 4e202
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s 4e202 a
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s a b
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s b c
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s c 4e202
    ln: symbolický odkaz &apos;4e202&apos; nebylo možné vytvořit: Soubor již existuje
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ rm 4e202 a b c
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ls -l
    celkem 8
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 13 pro  2 10:35 e2512.txt
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  8 pro  2 10:04 soubor_inote.txt
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  0 pro  2 10:01 soubor.txt
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  8 pro  2 10:49 <font color="#2AA1B3"><b>start_e2512.txt</b></font> -&gt; ../1.txt
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204 10 pro  2 10:02 <font color="#2AA1B3"><b>zástupce_soubor.txt</b></font> -&gt; soubor.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s 4e202 a
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s a b
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s b c
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s c 4e202
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ls -l
    celkem 8
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  5 pro  2 10:57 <span style="background-color:#171421"><font color="#C01C28"><b>a</b></font></span> -&gt; <span style="background-color:#171421"><font color="#C01C28"><b>4e202</b></font></span>
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  1 pro  2 10:57 <span style="background-color:#171421"><font color="#C01C28"><b>b</b></font></span> -&gt; <span style="background-color:#171421"><font color="#C01C28"><b>a</b></font></span>
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  1 pro  2 10:57 <span style="background-color:#171421"><font color="#C01C28"><b>c</b></font></span> -&gt; <span style="background-color:#171421"><font color="#C01C28"><b>b</b></font></span>
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 13 pro  2 10:35 e2512.txt
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  8 pro  2 10:04 soubor_inote.txt
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  0 pro  2 10:01 soubor.txt
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  8 pro  2 10:49 <font color="#2AA1B3"><b>start_e2512.txt</b></font> -&gt; ../1.txt
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204 10 pro  2 10:02 <font color="#2AA1B3"><b>zástupce_soubor.txt</b></font> -&gt; soubor.txt
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  1 pro  2 10:57 <span style="background-color:#171421"><font color="#C01C28"><b>4e202</b></font></span> -&gt; <span style="background-color:#171421"><font color="#C01C28"><b>c</b></font></span>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ls 4e202
    ls: nelze přistoupit k &apos;4e202&apos;: Příliš mnoho úrovní symbolických odkazů
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ echo ahoj &gt; 4e202
    bash: 4e202: Příliš mnoho úrovní symbolických odkazů
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ rm 4e202 a b c
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s 4e202 a
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s a b
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s b c
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s c 4e202
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ echo ahoj &gt; 4e202
    bash: 4e202: Příliš mnoho úrovní symbolických odkazů
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ls -l
    celkem 8
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  5 pro  2 11:00 <span style="background-color:#171421"><font color="#C01C28"><b>a</b></font></span> -&gt; <span style="background-color:#171421"><font color="#C01C28"><b>4e202</b></font></span>
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  1 pro  2 11:00 <span style="background-color:#171421"><font color="#C01C28"><b>b</b></font></span> -&gt; <span style="background-color:#171421"><font color="#C01C28"><b>a</b></font></span>
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  1 pro  2 11:00 <span style="background-color:#171421"><font color="#C01C28"><b>c</b></font></span> -&gt; <span style="background-color:#171421"><font color="#C01C28"><b>b</b></font></span>
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 13 pro  2 10:35 e2512.txt
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  8 pro  2 10:04 soubor_inote.txt
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  0 pro  2 10:01 soubor.txt
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  8 pro  2 10:49 <font color="#2AA1B3"><b>start_e2512.txt</b></font> -&gt; ../1.txt
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204 10 pro  2 10:02 <font color="#2AA1B3"><b>zástupce_soubor.txt</b></font> -&gt; soubor.txt
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  1 pro  2 11:00 <span style="background-color:#171421"><font color="#C01C28"><b>4e202</b></font></span> -&gt; <span style="background-color:#171421"><font color="#C01C28"><b>c</b></font></span>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ls 4e202
    ls: nelze přistoupit k &apos;4e202&apos;: Příliš mnoho úrovní symbolických odkazů
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ cat 4e202
    cat: 4e202: Příliš mnoho úrovní symbolických odkazů
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ rm 4e202
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ rm a b c
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ls -l
    celkem 8
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 13 pro  2 10:35 e2512.txt
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  8 pro  2 10:04 soubor_inote.txt
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  0 pro  2 10:01 soubor.txt
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  8 pro  2 10:49 <font color="#2AA1B3"><b>start_e2512.txt</b></font> -&gt; ../1.txt
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204 10 pro  2 10:02 <font color="#2AA1B3"><b>zástupce_soubor.txt</b></font> -&gt; soubor.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ echo ahoj &gt; 4e202
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s 4e202 c
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s c b
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ln -s b a
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ ls -l
    celkem 12
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  1 pro  2 11:06 <font color="#2AA1B3"><b>a</b></font> -&gt; b
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  1 pro  2 11:06 <font color="#2AA1B3"><b>b</b></font> -&gt; c
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  5 pro  2 11:06 <font color="#2AA1B3"><b>c</b></font> -&gt; 4e202
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 13 pro  2 10:35 e2512.txt
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  8 pro  2 10:04 soubor_inote.txt
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  0 pro  2 10:01 soubor.txt
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204  8 pro  2 10:49 <font color="#2AA1B3"><b>start_e2512.txt</b></font> -&gt; ../1.txt
    lrwxrwxrwx 1 ubuntu2204 ubuntu2204 10 pro  2 10:02 <font color="#2AA1B3"><b>zástupce_soubor.txt</b></font> -&gt; soubor.txt
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  5 pro  2 11:06 4e202
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ cat 4e202
    ahoj
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ cat a
    ahoj
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ cat b
    ahoj
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv11</b></font>$ cat c
    ahoj
</pre>

> Nastavit jako věžný adresář => vlezu do něho

**1048657** -rw-rw-r-- 1 ubuntu2204 ubuntu2204  0 pro  2 10:01 soubor.txt
> `1048657` je i-note souboru

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 09-12-25 H13
## Pojmenováná roura (pip)
> Je speciální soubor, který si může vytvořit každý uživatel. Pojmenovaná roura slouží k předávání dat mezi procesy, které umožňují (jenom) čtení a zápis Z a DO souboru.  
> Roura slouží pro jednosměrnou komunikaci. Jeden proces (producet dat) do roury zapisuje. Druhý proces (konzument) z roury čte.  
> Producent zapisující data pozastaví, po dobu, kdy komzument data čte.  
> A opačně konzument čeká, dokud producent nezačne data zapisovat.  
> Producent ukončí zápis speciálním znakem EOF (End Of File).  

`mknod (cesta k souboru) p` -> vytvoření souboru pojmenované roury  
    > *p* (alias *pipe*) určuje typ speciálního souboru pojmenované roury.  

> Stane-li se speciální soubor s pojmenovanou rourou nbepotřebný, je vhodné jej smazat, protože pokus pokus o čtení z roury bez spouštění producenta vyvolá nekonečně dlouho trvající operaci.  


> `nl -v 15 roura-1f38c | tee protokolu_99244`  
`nl -v 15` -> Je příkaz, který vypisuje očíslované řádky.  
`tee` -> data vloží do souboru `protokolu_99244` a současně vypíše na terminál.  

#### První terminál (producent):
<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cd ~/Plocha
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir cv12
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ cd cv12
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv12</b></font>$ mknod roura-1f38c p
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv12</b></font>$ head /etc/passwd &gt; roura-1f38c
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv12</b></font>$ head /etc/passwd &gt; roura-1f38c
</pre>

#### Druhý terminál (konzument):
<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cd ~/Plocha/cv12
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv12</b></font>$ cat roura-1f38c
    root:x:0:0:root:/root:/bin/bash
    daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
    bin:x:2:2:bin:/bin:/usr/sbin/nologin
    sys:x:3:3:sys:/dev:/usr/sbin/nologin
    sync:x:4:65534:sync:/bin:/bin/sync
    games:x:5:60:games:/usr/games:/usr/sbin/nologin
    man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
    lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
    mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
    news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv12</b></font>$ nl -v 15 roura-1f38c | tee prokontrolu_99244
        15	root:x:0:0:root:/root:/bin/bash
        16	daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
        17	bin:x:2:2:bin:/bin:/usr/sbin/nologin
        18	sys:x:3:3:sys:/dev:/usr/sbin/nologin
        19	sync:x:4:65534:sync:/bin:/bin/sync
        20	games:x:5:60:games:/usr/games:/usr/sbin/nologin
        21	man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
        22	lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
        23	mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
        24	news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv12</b></font>$ rm roura-1f38c
</pre>

Shell přesměrování--propojení zajišťují před provedením příkazu:  
File descriptor number (n)  
    `příka n> soubor` -> do souboru  
    `příka n< soubor` -> ze souboru  

Každý proces má nastaveno:  
    `0` -> standartní vstup  
    `1` -> standartní výstup  
    `2` -> standartní chybový výstup  

Implicitní variatny:  
    `1>` -> je totéž jako `>`  
    `0<` -> je totéž jako `<`  

Přesměrování vstupu: `příkaz n< soubor` (soubor musí však existovat)  

Přesměrování výstupu: `přikaz n> soubor` (pokovaď soubor neexistuje, je vytvořen. Pokud soubor existuje, v okamžiku otevření se zkrátí na velikost 0 a bude se přepisovat)  

Připojení výstupu na konec souboru:  
    `příkaz n>> soubor` -> neexistuje-li vytvoří ho  

Vstup dokumentu ze stejného zdroje jako příkazy:  
    `příkaz n<< soubor` -> ukončení je řetězec znaků, který když se najde na začátku řádku, označí konec vstupu. Nesmí obsahovat mezery  
    `mail ubuntu2204 << EOF` -> první řádej e-mailu  

## Úkol:
1. Vytvořte adresář `cv18`.
2. Vytvoř prázdná soubory: `prvni`, `druhy`, `treti`, `ctvrty`, `paty`, `sesty`, `sedmi`, `osmy`, `devaty`, `desaty`.
3. A vypiš si je dlouhým výpisem.
4. Pomocí `ls` vytvoříme seznam do souboru `seznam`
5. Vlož soubor `seznam` na standertní vstup příkazu `sort -r` (který obsah seřadí [`-r` udělá reverzně]) a výstup příkazu přesměrujte do souboru `reverzne`. (samotný sort vytvoří abecedně)

### Řešení:
<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ mkdir cv18
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ cd cv18
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ touch prvni druhy treti ctvrty paty sesty sedmi osmy devaty desaty
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ ls -l
    celkem 0
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 pro  9 10:16 ctvrty
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 pro  9 10:16 desaty
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 pro  9 10:16 devaty
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 pro  9 10:16 druhy
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 pro  9 10:16 osmy
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 pro  9 10:16 paty
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 pro  9 10:16 prvni
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 pro  9 10:16 sedmi
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 pro  9 10:16 sesty
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204 0 pro  9 10:16 treti
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ ls &gt;&gt; seznam
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ cat seznam
    ctvrty
    desaty
    devaty
    druhy
    osmy
    paty
    prvni
    sedmi
    sesty
    seznam
    treti
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ cat seznam | sort -r | tee reverzne
    treti
    seznam
    sesty
    sedmi
    prvni
    paty
    osmy
    druhy
    devaty
    desaty
    ctvrty
</pre>

`tee` -> vypíše okamžitě obsah souboru.  

<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ touch spusteno
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ date &gt;&gt; spusteno
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ cat spusteno
    Út 9. prosince 2025, 10:38:00 CET
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ date &gt;&gt; spusteno
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ date &gt;&gt; spusteno
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ date &gt;&gt; spusteno
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ date &gt;&gt; spusteno
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ wc -l spusteno
    5 spusteno
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/Plocha/cv18</b></font>$ cat spusteno
    Út 9. prosince 2025, 10:38:00 CET
    Út 9. prosince 2025, 10:38:09 CET
    Út 9. prosince 2025, 10:38:10 CET
    Út 9. prosince 2025, 10:38:11 CET
    Út 9. prosince 2025, 10:38:12 CET
</pre>
> Stačilo dát pouze `date >> spusteno` -> soubor se tím sám spustí  
`wc -l (soubor)` -> vypisuje kolikrát se spustil.  
`wc (soubor)` -> vypíše `5  30 200 spusteno`, ale netuším co znamená  

<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv19</b></font>$ cat /etc/passwd | tee data
    root:x:0:0:root:/root:/bin/bash
    daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
    bin:x:2:2:bin:/bin:/usr/sbin/nologin
    sys:x:3:3:sys:/dev:/usr/sbin/nologin
    sync:x:4:65534:sync:/bin:/bin/sync
    games:x:5:60:games:/usr/games:/usr/sbin/nologin
    man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
    lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
    mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
    news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
    uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
    proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
    www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
    backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
    list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
    irc:x:39:39:ircd:/run/ircd:/usr/sbin/nologin
    gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
    nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
    systemd-network:x:100:102:systemd Network Management,,,:/run/systemd:/usr/sbin/nologin
    systemd-resolve:x:101:103:systemd Resolver,,,:/run/systemd:/usr/sbin/nologin
    messagebus:x:102:105::/nonexistent:/usr/sbin/nologin
    systemd-timesync:x:103:106:systemd Time Synchronization,,,:/run/systemd:/usr/sbin/nologin
    syslog:x:104:111::/home/syslog:/usr/sbin/nologin
    _apt:x:105:65534::/nonexistent:/usr/sbin/nologin
    tss:x:106:112:TPM software stack,,,:/var/lib/tpm:/bin/false
    uuidd:x:107:115::/run/uuidd:/usr/sbin/nologin
    systemd-oom:x:108:116:systemd Userspace OOM Killer,,,:/run/systemd:/usr/sbin/nologin
    tcpdump:x:109:117::/nonexistent:/usr/sbin/nologin
    avahi-autoipd:x:110:119:Avahi autoip daemon,,,:/var/lib/avahi-autoipd:/usr/sbin/nologin
    usbmux:x:111:46:usbmux daemon,,,:/var/lib/usbmux:/usr/sbin/nologin
    dnsmasq:x:112:65534:dnsmasq,,,:/var/lib/misc:/usr/sbin/nologin
    kernoops:x:113:65534:Kernel Oops Tracking Daemon,,,:/:/usr/sbin/nologin
    avahi:x:114:121:Avahi mDNS daemon,,,:/run/avahi-daemon:/usr/sbin/nologin
    cups-pk-helper:x:115:122:user for cups-pk-helper service,,,:/home/cups-pk-helper:/usr/sbin/nologin
    rtkit:x:116:123:RealtimeKit,,,:/proc:/usr/sbin/nologin
    whoopsie:x:117:124::/nonexistent:/bin/false
    sssd:x:118:125:SSSD system user,,,:/var/lib/sss:/usr/sbin/nologin
    speech-dispatcher:x:119:29:Speech Dispatcher,,,:/run/speech-dispatcher:/bin/false
    fwupd-refresh:x:120:126:fwupd-refresh user,,,:/run/systemd:/usr/sbin/nologin
    nm-openvpn:x:121:127:NetworkManager OpenVPN,,,:/var/lib/openvpn/chroot:/usr/sbin/nologin
    saned:x:122:129::/var/lib/saned:/usr/sbin/nologin
    colord:x:123:130:colord colour management daemon,,,:/var/lib/colord:/usr/sbin/nologin
    geoclue:x:124:131::/var/lib/geoclue:/usr/sbin/nologin
    pulse:x:125:132:PulseAudio daemon,,,:/run/pulse:/usr/sbin/nologin
    gnome-initial-setup:x:126:65534::/run/gnome-initial-setup/:/bin/false
    hplip:x:127:7:HPLIP system user,,,:/run/hplip:/bin/false
    gdm:x:128:134:Gnome Display Manager:/var/lib/gdm3:/bin/false
    ubuntu2204:x:1000:1000:ubuntu2204,,,:/home/ubuntu2204:/bin/bash
    vboxadd:x:999:1::/var/run/vboxadd:/bin/false
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv19</b></font>$ wc -l data
    49 data
</pre>


<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv19</b></font>$ cat /etc/passwd | tee data | wc -l data
    49 data
</pre>

<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv19</b></font>$ cat data | grep -v systemd | grep -v /var | tee vystup
    root:x:0:0:root:/root:/bin/bash
    daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
    bin:x:2:2:bin:/bin:/usr/sbin/nologin
    sys:x:3:3:sys:/dev:/usr/sbin/nologin
    sync:x:4:65534:sync:/bin:/bin/sync
    games:x:5:60:games:/usr/games:/usr/sbin/nologin
    proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
    irc:x:39:39:ircd:/run/ircd:/usr/sbin/nologin
    nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
    messagebus:x:102:105::/nonexistent:/usr/sbin/nologin
    syslog:x:104:111::/home/syslog:/usr/sbin/nologin
    _apt:x:105:65534::/nonexistent:/usr/sbin/nologin
    uuidd:x:107:115::/run/uuidd:/usr/sbin/nologin
    tcpdump:x:109:117::/nonexistent:/usr/sbin/nologin
    kernoops:x:113:65534:Kernel Oops Tracking Daemon,,,:/:/usr/sbin/nologin
    avahi:x:114:121:Avahi mDNS daemon,,,:/run/avahi-daemon:/usr/sbin/nologin
    cups-pk-helper:x:115:122:user for cups-pk-helper service,,,:/home/cups-pk-helper:/usr/sbin/nologin
    rtkit:x:116:123:RealtimeKit,,,:/proc:/usr/sbin/nologin
    whoopsie:x:117:124::/nonexistent:/bin/false
    speech-dispatcher:x:119:29:Speech Dispatcher,,,:/run/speech-dispatcher:/bin/false
    pulse:x:125:132:PulseAudio daemon,,,:/run/pulse:/usr/sbin/nologin
    gnome-initial-setup:x:126:65534::/run/gnome-initial-setup/:/bin/false
    hplip:x:127:7:HPLIP system user,,,:/run/hplip:/bin/false
    ubuntu2204:x:1000:1000:ubuntu2204,,,:/home/ubuntu2204:/bin/bash
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/cv19</b></font>$ wc -l vystup
    24 vystup
</pre>


<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# ??-??-25 H14
`sort --help`  
<details>
    <pre>
        -b, --ignore-leading-blanks ignoruje úvodní mezery
        -d, --dictionary-order      uvažuje pouze mezery a alfanumerické znaky
        -f, --ignore-case           převede malá písmena na velká
        -g, --general-numeric-sort  porovnává podle obecných číselných hodnot
        -i, --ignore-nonprinting    uvažuje pouze tisknutelné znaky
        -M, --month-sort            porovnává podle měsíců
                                    (neznámý) < „LED“ < … < „PRO“
        -h, --human-numeric-sort    porovnává čísla v lidsky čitelné podobě
                                    (například 2K 1G)
        -n, --numeric-sort          porovnává podle číselné hodnoty řetězce
        -R, --random-sort           zamíchá, ale seskupí stejné klíče, vizte shuf(1)
            --random-source=SOUBOR  získá náhodné bajty ze SOUBORU
        -r, --reverse               obrátí výsledek porovnávání
            --sort=SLOVO            řadí podle SLOVA:
                                    general-numeric -g, human-numeric -h, month -M,
                                    numeric -n, random -R, version -V
        -V, --version-sort          přirozené řazení (verzovacích) čísel v textu
        .
        **Další přepínače:**
            --batch-size=PSPOJŮ   najednou spojí nejvýše PSPOJŮ vstupů;
                                  při více použije dočasné soubory
        -c, --check,  --check=diagnose-first
                                  zkontroluje, zda vstup je seřazen; neřadí
        -C, --check=quiet, --check=silent
                                  jako -c, ale nehlásí první chybnou řádku
            --compress-program=PROGRAM
                                  pomocné soubory komprimuje příkazem PROGRAM,
                                  dekomprimuje je pomocí PROGRAM -d
            --debug               vyznačí část řádku použitou k řazení a upozorní
                                  na sporné způsoby použití na chybovém výstupu
            --files0-from=S       čte vstup ze souborů, jejichž jména zakončená
                                  znakem NULL jsou uvedena v souboru S;
                                  Je-li S „-“, pak načte jména ze standardního vstupu
        -k, --key=DEFINICE_KLÍČE  řadí podle klíče, DEFINICE_KLÍČE určuje místo
                                  a druh
        -m, --merge               spojí již seřazené soubory, neřadí
        -o, --output=SOUBOR       výsledek zapíše do SOUBORU místo na standardní
                                  výstup
        -s, --stable              stabilizuje výsledek zakázáním seřazení stejných
                                  položek porovnáváním bajt po bajtu
        -S, --buffer-size=VELIKOST
                                  použije VELIKOST pro hlavní paměťový buffer
        -t, --field-separator=ODDĚLOVAČ
                                  použije ODDĚLOVAČE místo přechodu nemezera/mezera
        -T, --temporary-directory=ADRESÁŘ
                                  použije ADRESÁŘ pro dočasné soubory, nepoužije
                                  $TMPDIR, ani /tmp.
                                  Více přepínačů zadává více adresářů.
            --parallel=N          omezí počet souběžných řazení na N
        -u, --unique              s -c testuje striktní uspořádání;
                                  jinak vypíše pouze první ze stejných sekvencí
        -z, --zero-terminated     oddělovač řádků je znak NUL, ne nový řádek
            --help     vypíše tuto nápovědu a skončí
            --version  vypíše označení verze a skončí
    </pre>
</details>

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 06-01-26 H15
## Spouštění procesu na pozadí
> Spouštíme pomocí `&`  
> Znak `&` je oddělovač příkazů, které proces spustí čekání na dokončení, tj. `shell` ihned vypíše prompt  
> - Standartní výstup procesu spouštěného na pozadí je apojen na `/dev/null`  
> - Proces na pozadí je odstíněn od řídících znaků typu `intr` (ctrl+C) apod.  

## Job Control
> Procesy na spravujete prostředky `Job Conrol`. Jsou to příkazy, k nimž nápovědu si vypíšete pomocí:  
> `help jobs`  
> `help bg`  
> `help fg`  
> `help kill`  

### Help --
<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ help jobs
    jobs: jobs [-lnprs] [úloha…] nebo jobs -x příkaz [argumenty]
    Zobrazí stav úloh.
    
    Vypíše aktivní úlohy. ÚLOHA omezuje výstup na danou úlohu. Bez uvedení
    přepínačů bude vypsán stav všech aktivních úloh.
    
    Přepínače:
      -l  vypíše navíc ID procesů
      -n  vypíše pouze procesy, které od minulého oznámení změnily stav
      -p  vypíše pouze ID procesů
      -r  zúží výstup jen na běžící úlohy
      -s  zúží výstup jen na pozastavené úlohy
    
    Je-li použito -x, bude spuštěn příkaz, jakmile všechny úlohy uvedené mezi
    ARGUMENTY budou nahrazeny ID procesu, který je vedoucím skupiny dané úlohy.
    
    Návratový kód:
    Vrátí úspěch, pokud nebyl zadán neplatný přepínač a nevyskytla se chyba.
    Byl-ly použit přepínač -x, vrátí návratový kód PŘÍKAZU.
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ help bg
    bg: bg [úloha…]
    Přesune úlohy do pozadí.
    
    Přepne každou úlohu určenou pomocí ÚLOHA na pozadí, jako by byla
    spuštěna s „&amp;“. Ne-li ÚLOHA uvedena, použije se úloha, o které si shell
    myslí, že je aktuální.
    
    Návratový kód:
    Vrátí úspěch, pokud je správa úloh zapnuta a nedošlo-li k nějaké chybě.
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ help fg
    fg: fg [úloha]
    Přepne úlohu na popředí.
    
    Přesune úlohu určenou pomocí ÚLOHA na popředí a učiní ji aktuální úlohou.
    Není-li ÚLOHA zadána, použije se úloha, o které si shell myslí, že je
    aktuální.
    
    Návratový kód:
    Kód úlohy přesunuté do popředí, nebo došlo-li k chybě, kód selhání.
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ help kill
    kill: kill [-s sigspec | -n číssig | -sigspec] pid | úloha… nebo kill -l [sigspec]
    Zašle signál úloze.
    
    Zašle procesu určeném PID (nebo ÚLOHOU) signál zadaný pomocí SIGSPEC
    nebo ČÍSSIG. Není-li SIGSPEC ani ČÍSSIG zadán, pak se předpokládá SIGTERM.
    
    Přepínače:
      -s sig  SIG je název signálu
      -n sig  SIG je číslo signálu
      -l      vypíše čísla signálů; pokud „-l“ následují argumenty, má
              se za to, že se jedná o čísla signálů, pro které se mají vyspat
              jejich názvy.
      -L      synonymum pro -l
    
    Kill je vestavěný příkaz shellu ze dvou důvodů: umožňuje použít
    identifikátory úloh namísto ID procesů a umožní zabíjet procesy i poté,
    co jste dosáhli limitu počtu procesů, které smíte vytvořit.
    
    Návratový kód:
    Vrátí úspěch, pokud nebyl zadán neplatný přepínač a nedošlo k chybě.
</pre>

## …
`ping (adresa)` -> ověřování dostupnosti  
`Ctrl+Z` -> susp. na **fg**  
`kill %[num]` -> na **bg** V `[]` se píše číslo úlohy  

<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ping www.seznam.cz
    PING www.seznam.cz (77.75.77.222) 56(84) bytes of data.
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=1 ttl=53 time=10.5 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=2 ttl=53 time=8.23 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=3 ttl=53 time=10.0 ms
    ...
    ^C
    --- www.seznam.cz ping statistics ---
    66 packets transmitted, 66 received, 0% packet loss, time 65087ms
    rtt min/avg/max/mdev = 8.163/10.714/26.076/2.695 ms
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ping www.seznam.cz
    PING www.seznam.cz (77.75.77.222) 56(84) bytes of data.
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=1 ttl=53 time=8.93 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=2 ttl=53 time=10.2 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=3 ttl=53 time=10.7 ms
    ...
    ^Z
    [1]+  Pozastavena             ping www.seznam.cz
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ jobs
    [1]+  Pozastavena             ping www.seznam.cz
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ fg
    ping www.seznam.cz
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=15 ttl=53 time=14.9 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=16 ttl=53 time=15.1 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=17 ttl=53 time=10.8 ms
    ...
    ^Z
    [1]+  Pozastavena             ping www.seznam.cz
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ bg
    [1]+ ping www.seznam.cz &amp;
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ 64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=39 ttl=53 time=8.65 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=40 ttl=53 time=10.1 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=41 ttl=53 time=10.5 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=42 ttl=53 time=10.2 ms
    ...
    ^C
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ 64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=54 ttl=53 time=9.46 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=55 ttl=53 time=9.26 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=56 ttl=53 time=11.9 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=57 ttl=53 time=9.95 ms
    ...
    ls
    <font color="#12488B"><b>Dokumenty</b></font>  <font color="#12488B"><b>Hudba</b></font>  <font color="#12488B"><b>Obrázky</b></font>  <font color="#12488B"><b>Plocha</b></font>  <font color="#12488B"><b>snap</b></font>  <font color="#12488B"><b>Stažené</b></font>  <font color="#12488B"><b>Šablony</b></font>  <font color="#12488B"><b>Veřejné</b></font>  <font color="#12488B"><b>Videa</b></font>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ 64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=71 ttl=53 time=11.3 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=72 ttl=53 time=10.6 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=73 ttl=53 time=10.1 ms
    64 bytes from www.seznam.cz (77.75.77.222): icmp_seq=74 ttl=53 time=9.77 ms
    ...
</pre>

### teaks
<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ping www.seznam.cz
    PING www.seznam.cz (77.75.79.222) 56(84) bytes of data.
    64 bytes from www.seznam.cz (77.75.79.222): icmp_seq=1 ttl=53 time=8.54 ms
    64 bytes from www.seznam.cz (77.75.79.222): icmp_seq=2 ttl=53 time=8.28 ms
    64 bytes from www.seznam.cz (77.75.79.222): icmp_seq=3 ttl=53 time=10.2 ms
    64 bytes from www.seznam.cz (77.75.79.222): icmp_seq=4 ttl=53 time=10.0 ms
    64 bytes from www.seznam.cz (77.75.79.222): icmp_seq=5 ttl=53 time=7.88 ms
    64 bytes from www.seznam.cz (77.75.79.222): icmp_seq=6 ttl=53 time=8.02 ms
    64 bytes from www.seznam.cz (77.75.79.222): icmp_seq=7 ttl=53 time=8.29 ms
    64 bytes from www.seznam.cz (77.75.79.222): icmp_seq=8 ttl=53 time=8.39 ms
    64 bytes from www.seznam.cz (77.75.79.222): icmp_seq=9 ttl=53 time=23.5 ms
    ^Z
    [1]+  Pozastavena             ping www.seznam.cz
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ sleep 86400 &amp;
    [2] 5508
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ sleep 600 &amp;
    [3] 5509
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ jobs
    [1]+  Pozastavena             ping www.seznam.cz
    [2]   Běží                 sleep 86400 &amp;
    [3]-  Běží                 sleep 600 &amp;
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ jobs | tee ukol
    [1]+  Pozastavena             ping www.seznam.cz
    [2]   Běží                 sleep 86400 &amp;
    [3]-  Běží                 sleep 600 &amp;
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ kill ping www.seznam.cz
    bash: kill: ping: argumenty musí být proces nebo identifikátor úlohy
    bash: kill: www.seznam.cz: argumenty musí být proces nebo identifikátor úlohy
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ kill ping
    bash: kill: ping: argumenty musí být proces nebo identifikátor úlohy
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ kill %1

    [1]+  Pozastavena             ping www.seznam.cz
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ kill %2
    [1]+  Ukončen (SIGTERM)      ping www.seznam.cz
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ jobs
    [2]-  Ukončen (SIGTERM)      sleep 86400
    [3]+  Běží                 sleep 600 &amp;
</pre>

`sleep 86400` -> 1 den  
`sleep 600` -> 10 minut  

<br>
| ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== | <br>
| ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== | <br>
| ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== | <br>
<br>

# …
### Poznámka mimo
> Kliknutí kolečkem při označení (vybrání) nějakého textu automaticky zkopíruje obsah do otevřené aplikace  
> `clear` -> vymaže obsah terminálu  
> `dir` -> zobrazí zásobník adresářů  
> `help` -> Zobrazí podrobnosti o vestavěných příkazech.  
> `help (parametr) (vzorek)` -> vypíše daný příkaz  
>   * `-d` -> vypíše krátké pojednání na každé téma  
>   * `-m` -> zobrazí použití v jakoby manuálovém formátu  
>   * `-s` -> vypíše pouze krátký popis použití o každém příkazu odpovídajícímu vzorku  

| ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== | <br> 
| ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== | <br> 
| ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== | <br>

#### Poznáky pod čarou  
##### Zkratky  
    * `H??` -> Hodina  
    * `T??` -> Task (úkol)  
    * `1920 × 1017 (9:5)` -> rozložení obrazu na celé okno Ubuntu (?)  

##### Alt kódy  
en dash     –   0150  
em dash     —   0151  
backtick    `     96  
H. Ellipsis …   0133  

| ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== | <br> 
| ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== | <br> 
| ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== | <br>

#### Datum + Hodina  
> `# den-měsíc-rok hodina`  
    …  

#### Formátování  
`` -> .  
    `` -> .  

#### Úkol  
> **T01**  
    > * a)   
    > * b)   
    > * c)   
    > * d)   
    > * e)   
    > * f)   
    > * g)   
    > * h)   
    > * i)   
    > * j)   



> ⟦⟧  〚〛
> ⦃⦄
> ⦅⦆
> ⸙