# 13-01-26 H16
> **Test 3.**
<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ mkdir VOSYKA
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cd VOSYKA
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ touch a1 a2 b1 b2 c2 c3 d4 tadeas_vosyka2
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ ls
    a1  a2  b1  b2  c2  c3  d4  tadeas_vosyka2
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ cd ~/
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ping www.cisco.com
    PING e2867.dsca.akamaiedge.net (2.19.218.95) 56(84) bytes of data.
    64 bytes from a2-19-218-95.deploy.static.akamaitechnologies.com (2.19.218.95): icmp_seq=1 ttl=54 time=8.94 ms
    64 bytes from a2-19-218-95.deploy.static.akamaitechnologies.com (2.19.218.95): icmp_seq=2 ttl=54 time=9.04 ms
    64 bytes from a2-19-218-95.deploy.static.akamaitechnologies.com (2.19.218.95): icmp_seq=3 ttl=54 time=9.29 ms
    ^Z
    [2]+  Pozastavena             ping www.cisco.com
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ls ~/VOSYKA | tee vypis_VOSYKA &amp;
    [3] 146356
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ a1
    a2
    b1
    b2
    c2
    c3
    d4
    tadeas_vosyka2

    [3]   Dokončena              ls --color=auto ~/VOSYKA | tee vypis_VOSYKA
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ open vypis_VOSYKA
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ jobs | tee tadeas_vosyka2
    [1]-  Pozastavena             ping www.cisco.com
    [2]+  Pozastavena             ping www.cisco.com
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ echo &quot;Tadeáš Vosyka&quot; &gt;&gt; tadeas_vosyka2
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cat tadeas_vosyka2
    [1]-  Pozastavena             ping www.cisco.com
    [2]+  Pozastavena             ping www.cisco.com
    Tadeáš Vosyka
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ sudo chmod 755 tadeas_vosyka2
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ touch VOSYKA_seznam.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ ls ~/VOSYKA | tee VOSYKA_seznam.txt
    a1
    a2
    b1
    b2
    c2
    c3
    d4
    tadeas_vosyka2
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cat tadeas_vosyka2 &gt;&gt; VOSYKA_seznam.txt
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ sort --help
    Použití: sort [PŘEPÍNAČ]… [SOUBOR]…
      nebo:  sort [PŘEPÍNAČ]… --files0-from=S
    Vypíše seřazené zřetězení všech SOUBORŮ na standardní výstup.

    Není-li uveden SOUBOR nebo když je SOUBOR „-“, čte ze standardního vstupu.

    Povinné argumenty dlouhých přepínačů jsou také povinné u odpovídajících
    krátkých přepínačů.
    Řadicí přepínače:

      -b, --ignore-leading-blanks ignoruje úvodní mezery
      -d, --dictionary-order      uvažuje pouze mezery a alfanumerické znaky
      -f, --ignore-case           převede malá písmena na velká
      -g, --general-numeric-sort  porovnává podle obecných číselných hodnot
      -i, --ignore-nonprinting    uvažuje pouze tisknutelné znaky
      -M, --month-sort            porovnává podle měsíců
                                  (neznámý) &lt; „LED“ &lt; … &lt; „PRO“
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

    Další přepínače:

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

    DEFINICE_KLÍČE pro počáteční a koncové místo má tvar
    P[.Z][PŘEPÍNAČE][,P[.Z][PŘEPÍNAČE]], kde P je číslo položky a Z pozice znaku
    v položce, oboje počítáno od 1 a koncové místo je standardně konec řádku.
    Není-li uvedeno -t ani -b, znaky v položce jsou počítány od začátku
    předchozího bílého místa. PŘEPÍNAČE jsou jeden nebo více jednopísmenných
    řadicích přepínačů [bdfgiMhnRrV], které přebíjí globální nastavení pro tento
    klíč. Není-li klíč zadán, použije se celý řádek jako klíč. Přepínač --debug
    může objasnit chybné použití klíče.

    VELIKOST smí být následována těmito násobnými příponami:
    % 1 % z paměti, b 1, K 1024 (implicitní), a tak dále pro M, G, T, P, E, Z, Y.

    *** VAROVÁNÍ ***
    Lokalizace vybraná prostředím ovlivňuje pořadí řazení.
    Tradiční pořadí řazení, které používá hodnoty jednotlivých bajtů, získáte
    nastavením LC_ALL=C.

    On-line nápověda GNU coreutils: &lt;https://www.gnu.org/software/coreutils/&gt;
    Chyby v překladu hlaste na &lt;https://translationproject.org/team/cs.html&gt;
    (česky)
    Úplná dokumentace je na &lt;https://www.gnu.org/software/coreutils/sort&gt;
    nebo dostupná lokálně skrze: info &apos;(coreutils) sort invocation&apos;
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ count --help
    Příkaz „count“ nebyl nalezen, možná jste měli na mysli:
      příkaz „ocount“ z deb balíčku oprofile (1.4.0-0ubuntu7)
      příkaz „mount“ z deb balíčku mount (2.37.2-4ubuntu3.4)
    Vyzkoušejte: sudo apt install &lt;název deb balíčku&gt;
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cat --help
    Použití: cat [PŘEPÍNAČ]… [SOUBOR]…
    Zřetězí SOUBORY na standardní výstup.

    Není-li uveden SOUBOR nebo když je SOUBOR „-“, čte ze standardního vstupu.

      -A, --show-all           stejné jako -vET
      -b, --number-nonblank    čísluje neprázdné výstupní řádky, přebije -n
      -e                       stejné jako -vE
      -E, --show-ends          vypíše $ na konci každého řádku
      -n, --number             čísluje všechny výstupní řádky
      -s, --squeeze-blank      prázdné řádky jdoucí po sobě redukuje na jediný
      -t                       stejné jako -vT
      -T, --show-tabs          vypisuje znak TAB jako ^I
      -u                       (ignorováno)
      -v, --show-nonprinting   použije zápisu ^ a M-, kromě znaků LF a TAB
          --help     vypíše tuto nápovědu a skončí
          --version  vypíše označení verze a skončí

    Příklady:
      cat f - g  Vypíše obsah souboru f, pak standardní vstup, poté obsah g.
      cat        Kopíruje standardní vstup na standardní výstup.

    On-line nápověda GNU coreutils: &lt;https://www.gnu.org/software/coreutils/&gt;
    Chyby v překladu hlaste na &lt;https://translationproject.org/team/cs.html&gt;
    (česky)
    Úplná dokumentace je na &lt;https://www.gnu.org/software/coreutils/cat&gt;
    nebo dostupná lokálně skrze: info &apos;(coreutils) cat invocation&apos;
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cat -n VOSYKA_seznam.txt
         1	a1
         2	a2
         3	b1
         4	b2
         5	c2
         6	c3
         7	d4
         8	tadeas_vosyka2
         9	[1]-  Pozastavena             ping www.cisco.com
        10	[2]+  Pozastavena             ping www.cisco.com
        11	Tadeáš Vosyka
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cat VOSYKA_seznam.txt | sort *2 &gt;&gt; filtr_VOSYKA
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cat filtr_VOSYKA
    Tadeáš Vosyka
    [1]-  Pozastavena             ping www.cisco.com
    [2]+  Pozastavena             ping www.cisco.com
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cat VOSYKA_seznam.txt | grep *2 &gt;&gt; filtr_VOSYKA
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cat filtr_VOSYKA
    Tadeáš Vosyka
    [1]-  Pozastavena             ping www.cisco.com
    [2]+  Pozastavena             ping www.cisco.com
    tadeas_vosyka2
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ open filtr_VOSYKA
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ open VOSYKA_seznam.txt
</pre>

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 20-01-26 H17
<details>
    > **Řešení testu**
    <pre>
        <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ mkdir VOSYKA
        <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cd VOSYKA
        <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ touch a1 a2 b1 b2 c2 c3 d4 tadeas_vosyka2
        <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ ping cisco.com
        PING cisco.com (72.163.4.185) 56(84) bytes of data.
        64 bytes from redirect-ns.cisco.com (72.163.4.185): icmp_seq=1 ttl=36 time=138 ms
        64 bytes from redirect-ns.cisco.com (72.163.4.185): icmp_seq=2 ttl=36 time=136 ms
        64 bytes from redirect-ns.cisco.com (72.163.4.185): icmp_seq=3 ttl=36 time=137 ms
        64 bytes from redirect-ns.cisco.com (72.163.4.185): icmp_seq=4 ttl=36 time=141 ms
        ^Z
        [1]+  Pozastavena             ping cisco.com
        <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ ls &gt; vypis_VOSYKA &amp;
        [2] 6516
        <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ jobs | tee tadeas_vosyka2
        [1]+  Pozastavena             ping cisco.com
        [2]-  Dokončena              ls --color=auto &gt; vypis_VOSYKA
        [2]-  Dokončena              ls --color=auto &gt; vypis_VOSYKA
        <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ echo &quot;Tadeáš Vosyka&quot; &gt;&gt; tadeas_vosyka2
        <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ chmod 4755 tadeas_vosyka2
        <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ ls | tee VOSYKA_seznam.txt
        a1
        a2
        b1
        b2
        c2
        c3
        d4
        tadeas_vosyka2
        VOSYKA_seznam.txt
        vypis_VOSYKA
        <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ cat tadeas_vosyka2 &gt;&gt; VOSYKA_seznam.txt
        <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ wc -l VOSYKA_seznam.txt
        13 VOSYKA_seznam.txt
        <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ cat VOSYKA_seznam.txt | grep &quot;2&quot; | tee filtr_VOSYKA
        a2
        b2
        c2
        tadeas_vosyka2
        [2]-  Dokončena              ls --color=auto &gt; vypis_VOSYKA
    </pre>
</details>

## Soubory
**Ověření spuštěním souborů:**
<details>
<pre>
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ open tadeas_vosyka2
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ open VOSYKA_seznam.txt
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ open filtr_VOSYKA
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/VOSYKA</b></font>$ 
</pre>
</details>


    > **Soubor `tadeas_vosyka2`**
    > <pre>
    >     [1]+  Pozastavena             ping cisco.com
    >     [2]-  Dokončena              ls --color=auto > vypis_VOSYKA
    >     Tadeáš Vosyka
    > </pre>

    > **Soubor `VOSYKA_seznam.txt`**
    > <pre>
    >     a1
    >     a2
    >     b1
    >     b2
    >     c2
    >     c3
    >     d4
    >     tadeas_vosyka2
    >     VOSYKA_seznam.txt
    >     vypis_VOSYKA
    >     [1]+  Pozastavena             ping cisco.com
    >     [2]-  Dokončena              ls --color=auto > vypis_VOSYKA
    >     Tadeáš Vosyka
    > </pre>

    > **Soubor `filtr_VOSYKA`**
    > <pre>
    >     a2
    >     b2
    >     c2
    >     tadeas_vosyka2
    >     [2]-  Dokončena              ls --color=auto > vypis_VOSYKA
    > </pre>
</>


## Programování v Shellu
* Chceme-li posloupnost jistých příkazů používat opakovaně, případně z různých míst adresářové struktury, můžeme tuto poslooupnost uložit do soubory, který necháme zpracovat interpretrem příkazů.
* Interpretr příkazů zadává být *sh. bash* nebo další.
* Cestu k interpretru příkazů zadáváme v prvním řádku zdrojového kódu takto:

`#! /bin/bash`

Soubor necháme bez přípony (Linux sám rozpozná typ souboru podle obsahu) nebo mu přidáme příponu `.sh`. Nezapomeňte po vytvoření souboru zkontrolovat práva (kdo jej chce spouštět, musí mít právo **x**). Soubor spustíme voláním shellu s parametrem tvořeným jménem souboru.

`sh_jméno_skriptu` nebo jej necháme zpracovat aktuálním shellem (příkaz tečka) `. jméno_skriptu`

## Proměnné
* Proměnné není třeba před použitím deklarovat
* Datový typ přiřazen prvním použitím proměnné
* Při prvním použítím zadáváme pouze proměnné
* Při každém dalším použitím se na proměnnou odkazijeme pomocí znaků dolar (`$`).

pseudoprogram

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 27-01-26 H20
## Výpis na obrazovku
- Pomocí příkazu `echo` a uvozovek (`"`). Proměnné se přiřadí hodnota a ta se vypíše.
- Textový editor se otevře pomocí `nano (soubor)`.  
- **A napíšeme například:**
  ```sh
  #!/bin/sh
  x=5
  echo "Hodnota proměnné x je $x."
  ```
- A spouští se pomocí `sh (soubor)`.

## Čtení z klávesnice
- Pomocí  příkazu `read (proměnná)`, čte až do stisku klávesy *enter*. Vše přířadí do jedné proměnné.
- Můžeme načíst současně více proměnných pomocí `read (první) (druhá) (třetí)`, každý úsek oddělený mezerníkem a načtete do nové proměnné:
  ```shell
  #!/bin/sh
  read x
  echo "Hodnota x je $x."
  read jmeno prijmeni
  echo "Uživatel se jmenouje: $jmeno $prijmeni"
  ```

**Vytvoříme si příklad:**
```shell
#!/bin/sh
echo "SČÍTÁNÍ"; echo ""

echo "Zadej x: "; read x
echo "Zadej y: "; read y

z=$((x+y))
echo "$x + $y = $z"
```

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 03-02-26 H21
**Zadání:**
```bash
#!/bin/bash

echo "Zadej čísla oddělená mezerou:"
read num1 num2

echo "První číslo: $num1"
echo "Druhé číslo: $num2"

equal=$(($num1 + $num2))

echo "Součet: $equal"
```


## **Zadání:**
1. Vytvořte libovolný adresář.
2. Vytvořte soubor v adresář.
3. Vložte do souboru pomocí LibreOffice text `AHOJ. JAK SE MÁŠ` a uložte.
4. Vypište adresář na Ploše.
5. Výpis souboru přesměrujte do souboru `black`.
6. Vypište obsah souboru `black` na terminál.
7. Vypište na terminál úplný výpis Plochy.
```shell
#!/bin/sh

echo "Zadejte adresář:"
read folder
mkdir ~/Plocha/$folder

echo "Vytvořte soubor:"
read file
touch ~/Plocha/$folder/$file

echo "Vložte text do souboru 'AHOJ JAK SE MÁŠ' a ULOŽTE!"
soffice ~/Plocha/$folder/$file
read pokracujtestiskemklavesnice

echo "Vypište adresář."
ls ~/Plocha/$folder

echo "Přesměrujte adresář $file do souboru 'black'."
cat ~/Plocha/$folder/$file > ~/Plocha/black

echo "Vypište soubor 'black'."
cat ~/Plocha/black

echo "Úplný výpis 'Plochy'."
ls -l ~/Plocha
```

## **V terminále:**
<pre>
    <font color="#26A269"><b>ubuntu</b></font>:<font color="#12488B"><b>~/Plocha</b></font>$ sh 03s.sh
    Vytvořte adresář:
    folder
    Vytvořte soubor:
    file
    Vložte text &apos;AHOJ JAK SE MÁŠ&apos; A ULOŽ!
    Warning: failed to launch javaldx - java may not function correctly

    Vypište Vámi zadaný adresář.
    file
    Přesměrujte výstup file do souboru &apos;black&apos;.
    Vypište soubor &apos;black&apos;.
    Ahoj jak se máš
    Úplný výpis &apos;Plochy&apos;.
    celkem 16
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204   21 úno 17 10:45 black
    drwxrwxr-x 2 ubuntu2204 ubuntu2204 4096 úno 17 10:45 folder
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  184 úno 17 09:57 02s.sh
    -rw-rw-r-- 1 ubuntu2204 ubuntu2204  509 úno 17 10:44 03s.sh
</pre>

## Cvičení:
- Vytvořte soubor `04s.sh` a otevře ho.
1. 

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 24-02-26 H22
**Verze má**
```bash
#!/bin/bash

echo "Přesuňte se do domovského adresáře."
cd ~/

echo "Vypiš list."
ls ~/

echo "Přesuň se na plochu."
cd ~/Plocha

echo "Vytvoř 3 adresáře Testovaci1, Testovaci2, Testovaci3"
mkdir Testovaci1; mkdir Testovaci2; mkdir Testovaci3

echo "přesuň se do Testovaci2"
cd ~/Plocha/Testovaci2

echo "Vytvoř v Testovaci2 2 soubory soub1 a soub2"
touch soub1; touch soub2

echo "Vypište Testovaci2 s právy a časem vytvoření (dlouhý výpis)"
ls -l ~/Plocha/Testovaci2

echo "Otevři soubor v LibreOffice a nakopírujte sem dosud Vámi napsaný terminál - uložte a zavřete."
soffice ~/Plocha/Testovaci2/soub1

echo "stusknu enter"
read pokracujstiskemklavesy

echo "Přesměruj výstup ze soub1 do soub3, který umístíš na plochu."
cat ~/Plocha/Testovaci2/soub1 >  ~/Plocha/soub3

echo "Vypiš soubor soub3 na obrazovku."
cat ~/Plocha/soub3
```

**Chtěná verze**
```bash
#!/bin/bash

echo "Přesuňte se do domovského adresáře."
cd ~/

echo "Vypiš list."
ls ~/

echo "Přesuň se na plochu."
read plocha
cd ~/$plocha

echo "Vytvoř 3 adresáře Testovaci1, Testovaci2, Testovaci3"
read adr1 adr2 adr3
mkdir adr1 adr2 adr3

echo "přesuň se do Testovaci2"
read move1
cd ~/$plocha/$move1

echo "Vytvoř v Testovaci2 2 soubory soub1 a soub2"
read file1 file1
touch $file1 $file2

echo "Vypište Testovaci2 s právy a časem vytvoření (dlouhý výpis)"
ls -l ~/$plocha/$adr2

echo "Otevři soub1 v LibreOffice a nakopírujte sem dosud Vámi napsaný terminál - uložte a zavřete."
soffice ~/$plocha/$adr2/$file1

echo "Stisknu enter"
read pokracujstiskemklavesy

echo "Přesměruj výstup ze soub1 do soub3, který umístíš na plochu."
read file3
cat ~/$plocha/$adr/$file1 >  ~/$plocha/$file

echo "Vypiš soubor soub3 na obrazovku."
cat ~/$plocha/$file3
```

## Test sk.A
1. Vytvořte soubor `vaše_prijmeni.sh`.
2. Přesměrujte se do *domovského adresáře*.
3. Vytvořte domovském adresáři 3 soubory s názvem`a1`, `a2` a `a3`.
4. Do souboru `a1` vložte text 'Jsem magic' a na nový řádek vložte 'vase_jmeno_prijmeni'."
5. Na obrazovku vypište poslední řádek souboru 'a1'."

**řešení (mé)**
```bash
#!/bin/bash

echo "Přesměrovávám do domovského adresáře."
cd ~/

echo "Vytvoř adresář 'vaše_prjmeni'."
read adr
mkdir ~/$adr

echo "Vytvoř tři soubory 'a1', 'a2' a 'a3' (oddělené mezerou)."
read file1 file2 file3
touch ~/$adr/$file1; touch ~/$adr/$file2; touch ~/$adr/$file3

echo "Do souboru 'a1' vložte text 'Jsem nagic'."
read text1
echo "$text1" > ~/$adr/$file1

echo "Do shodného souboru vložte na druhý řádek 'vaše_jmeno_prijmeni'."
read your_name_surname
echo "$your_name_surname" >> ~/$adr/$file1

echo "Vypisuji na obrazovku poslední řádek ze souboru 'a1'."
tail -n1 ~/$adr/$file1
```

## Test sk.B
1. Vytvořte soubor `vase_prijmeni.sh`.
2. V domovském adresáři vytvořte 2 soubory se jmény `vase_prijmeni1` a `vase_prijmeni2`.
3. Uložte historii terminálu do souboru `vase_prijmeni2`.
4. Na konec souboru `vase_prijmeni2` vložte text 'Moje přijmení je: vase_prijmeni'."
5. Soubor `vase_prijmeni2` přesuňte na *plochu*.
6. Vypište soubor `vase_prijmeni2`, který je na ploše.

```bash
#!/bin/bash
echo "Přesměrovávám na domovský adresář."
cd ~/

echo "Vytvořte 2 soubory 'vase_prijmeni1' a 'vase_prijmeni2'."
read surname1 surname2
touch ~/$surname1 ~/$surname2

echo "Vypište historii do 'vase_prijmeni2'."
cat ~/.bash_history > ~/$surname2

echo "Na konec souboru 'vase_prijmeni2' vložte 'Moje přijmení je: vase_prijmeni'."
read name
echo "$name" >> ~/$surname2

echo "Přesouvám souboru 'vase_prijmeni.sh' na plochu."
mv ~/$surname2 ~/Plocha/

echo "Vypisuji souboru 'vase_prijmeni2'."
cat ~/Plocha/$surname2
```

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 03-03-26 H23
## Uvozovky a apostrofy
> `" "` Normální uvozovky. Řetězec uvnitř se nevykoná. Metaznaky se nevykonají.
> `' '` Řetězec je chápán jako obyčejný text. Je zamezeno nahrazování proměnných jejich hodnotou.
> ``příkaz`` Řetězec je shellem chápán jako příkaz k vykonání.

```bash
#!/bin/sh
text=10; echo "Text je $text;"  # vypíše: /Text je 10;/
text=10; echo 'Text je $text;'  # vypíše: /Text je $text;/
text=whoami; echo `$text;`      # vypíše (např): /ubuntu2204/
```

## Logické výrazy
K vyhodnocování logického výrazu používáme konstrukci `[ testovany_vyraz ]`
Testovat lze:
- **Typ souboru:**
    - `-f file` – Existuje a je obyčejným souborem?
    - `-d file` – Existuje a je adresářem?
- **Práva k souboru:**
    - `-r file` – Můžu číst soubor?
    - `-w file` – Můžu zapisovat do souboru?
    - `-x file` – Můžu soubor spustit?
    - `-O file` – Vlastním soubor?
    - `-N file` – Byl soubor od posledního čtení změněn?

- **Řetězce:**
    - `a1 = a2` Jsou identické?
    - `a1 != a2` Jsou rozdílné?
    - `-z string` Je délka řetězce nulová (řetězec je prázdny)?
    - `-n string` Je délka řetězce nenulová?
    - `str1 < str2` Je str1 abecedně před str2?
    - `str1 > str2` Je str1 abecedně za str2?

- **Numerické testy:**
  - `num1 -eq num2` Čísla se rovnají.
  - `num1 -ne num2` Čísla se nerovnají.
  - `num1 -lt num2` Číslo první je menší než číslo druhé.
  - `num1 -le num2` Číslo první je menší nebo rovno číslu druhému.
  - `num1 -gt num2` Číslo první je větší než číslo druhé.
  - `num1 -ge num2` Číslo první je větší nebo rovno číslo druhému.

- **Podmínky:**
  - Testování výrazů se často používá ve spojení `if … then … else … fi`.

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 10-03-26 H24

## Aritmetické výrazy 
Vyhodnocení matematického výrazu se dá provést pomocí příkazu `expr`, spojeného s obrácenými apostrofy nebo příkazem `$()`:
- `x=$(expr $x + 1)` nebo
- `x=``expr $x + 1`` `

**Například:**
```shell
#!/bin/sh
x=8
y=4 
z=$(($x + $y)) 
echo "Součet $x a $y je $z" 
``` 

## Řídicí konstrukce
- **Podmínka if**
```shell
if výraz;
then příkazy1;
[
    elif příkazy2;
    then příkazy3;
]
...
[
    else příkazy4;
]
fi
```

### Příklad 1.
```shell
#!/bin/sh
if grep -q roman /etc/passwd;
then echo Roman je tam
else echo neni tam
fi
```

### Příklad 2.
```shell
#!/bin/sh
if [ -f ~/Plocha/copy_aritme.sh ]

# Existuje-li souboru zkopíruj ho.
then
    mv ~/Plocha/copy_aritme.sh ~/Plocha/aritme.sh;
    echo "Hotovo!"

# Neexistuje-li soubor vypiš chybu
else
    echo "Soubor neexistuje!"
exit
fi
```

## Vícenásobné větvení – case
```shell
case slovo
in 
    vzor 1) příkazy;;
    vzor 2) příkazy;;
    *) příkazy;;
esac
```

### Příklad:
```shell
#!/bin/sh
echo "Znak?"
read znak
echo "Znak $znak je:"

case $znak in
    [0-9]) echo "Číslo.";;
    [A-Z]) echo "Velé písmeno.";;
    [a-z]) echo "Malé písmeno.";;
    *) echo "Jiný znak";;
esac
```

## Cykly
### **Cyklus for**
Předem znám počet opakování:
```shell
for promenna in seznam
do
    prikazy
done
```

Prvky seznamu jsou odděleny mezerou nebo tabulátorem:
```shell
#!/bin/sh
for i in 1 3 5 7
do
    echo $i
done
```

Místo konkrétních hodnot může být na místě seznamu "*žolík*" (zástupný znak) jako třeba hvězdička:
```shell
#!/bin/sh
for i in `ls *.html`
do
    echo $i
done
```

### **Cyklus while**
Cyklus bude probíhat, dokud je podmínka splněna:
```shell
while prikaz
do
    prikaz
done
```

**Příklad 1.**
```shell
while who | grep huzva > /dev/null
do
    sleep 20s
done
echo "Už se odhlásil"
```

**Příklad 2.**
```shell
#!/bin/sh
x=0

while [ $x -le 10 ]
do
    echo "Aktuální hodnota x je $x"
    x=$(expr $x + 1)
    sleep 1
done
```

## Cyklus until
Další průchod cyklem nastane, pokud není podmínka splněna (není platná):
```shell
until prikaz
do
    prikaz
done
```

**Příklad:**
```shell
untile who | grep huzva > /dev/null
do
    sleep 20s
done
echo "Už se přihlasil"
```

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 17-03-26 H25
## Příklad 1 – Větší/Menší
```bash
#!/bin/bash

num=10
echo "Napište náhodné číslo:"; read num1

if [ $num1 -gt $num ];
then echo "Tvé číslo je VĚTŠÍ než $num.";
else echo "Tvé číslo je MENŠÍ než $num.";
fi
```

## Příklad 2 – Heslo
```bash
#!/bin/bash

echo "Zadej heslo: "; read pw

if [ $pw = "linux" ];
then echo "\nHeslo bylo SPRÁVNÉ!";
else echo "\nHeslo bylo ŠPATNÉ!\nZkust to znovu.";
fi
```

## Příklad 3 – Plnoletost
```bash
#!/bin/bash

echo "Napiš tvůj věk: "; read age

if [ $age -ge 18 ];
then echo "Tvůj věk je VĚTŠÍ než 18.";
else echo "Tvůj věk je MENŠÍ než 18.";
fi
```

## Příklad 4 – Věk
```bash
#!/bin/bash

# read -p "Zadej svůj věk: " age # '-p' načítá do proměnné

echo "Napiš věk:"; read age

if [ $age -lt 18 ];
then echo "Nejsi plnoletý.";
elif [ $age -le 64 ];
then echo "Jsi dospělý.";
else echo "Jsi senior.";
fi
```

## Příklad 5 – Změna práva
```bash
#!/bin/bash

read -p "Zadej cestu k souboru: " path
read -p "Zadejte jméno souboru, u kterého nastavím plná práva: " file

if [ -f $path/$file ];
then sudo chmod 777 $path/$file;
else echo "Soubor neexistuje!";
fi

ls -l $path/$file
```

## Příklad 6 – Alkohol Tester
```bash
#!/bin/bash

# 0.5L piva = m.80kg/3h = ž.65kh/4h

read -p "Jakého jsi pohlaví?\nm=muž,f=žena\n>" gender
read -p "Před kolika minutami jste vypil/a 1 pivo?" minute
```

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 24-03-26 H26
## Příklad 1 – Kopírování s podmínkami
```bash
#!/bin/sh

# 1. Vytvoř v DmA soubor 'kopy'.
# 2. Otestuj, zde soubor opravdu existuje (podmínka).
# 3. a. Pokud existuje – nakopíruj ho na plochu a vypiš ji.
# 3. b. Pokud neexistuje – vypiš chybovou hlášku.

read -p "Vytvoř 'kopy' v DmA: " file
touch ~/$file

if [ -f ~/$file ];
then cp ~/$file ~/Plocha/$file
     echo "Hotovo! soubor je přesunut - vypisuji plochu!"
     ls ~/Plocha;
else echo "Soubor $file neexistuje!"
fi
```

## Příklad – Podmínka dělení
```bash
#!/bin/bash

# 1. Vytvořte program, který zjistí, zda je dané číslo končí na č. 8 a zároveň je delitelné 3.
# > Využijte operátor % - zbytek po celočíselném dělení.
# 2. Pokud číslo 'n' je dělitelné číslem 'd', tak zbytek po dělení 'd' je nula 'n=0'.

read -p "Napiš číslo: " num

div8=$(($num%10))
div3=$(($num%3))

echo "$num % 10 = $div8\nn$num % 3 = $div3"

if [ $div8 -eq 8 ] && [ $div3 -eq 0 ];
then echo "\nČíslo $num končí č. 8 a zároveň je dělené č. 3.";
else echo "\nČíslo $num nekončí č. 8 nebo není delitelné 3.";
fi
```

## Příklad – sudost/lichost
```bash
#!/bin/bash

# Napiš skript, který načte číslo a zjistí zda je sudé či liché.

read -p "Zadej číslo: " num

if [ $(($num % 2)) -eq 0 ];
then echo "Číslo je sudé.";
else echo "Číslo je liché.";
fi
```

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 31-03-26 H27
## Binární kalkulačka [Basic (Binary) calculator]
> Součástí většiny instalací unixových systémech bývá program `bc`. Zkratka z názvu `basic calculator` nebo `bench calculator` (stolní kalkulačka). Nejde o kalkulačku v podobě jakou si obvykle představujeme. Jedná se o programovací jazyk . Speciální vlastnosti kalkulačky je její *neomezená přesnost* a *neomezený rozsah zobrazení*.  
> Viz `man bc` nebo hledejte `unix bc` v Googlu.

## Příklad zpoužití:
<pre>
bc -l
2*3^2
18  <font color="#a4a4a4"># výstup</font>
</pre>

> Pro ukončení programu použijeme příkaz `quit`

## V terminálu:
<pre>
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ echo &apos;sqrt(5)&apos; | bc -l
2.23606797749978969640
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ echo &apos;scale=5; sqrt(5)&apos; | bc -l
2.23606
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ echo &apos;scale=500; sqrt(5)&apos; | bc -l
2.236067977499789696409173668731276235440618359611525724270897245410\
52092563780489941441440837878227496950817615077378350425326772444707\
38635863601215334527088667781731918791658112766453226398565805357613\
50417533785003423392414064442086432539097252592627228876299517402440\
68161177590890949849237139072972889848208864154268989409913169357701\
97486788844250897541329561831769214999774248015304341150359576683325\
12498815178139408000562420855243542235556106306342820234093331982933\
95974635227120134174961420
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ echo &apos;scale=5000; sqrt(5)&apos; | bc -l
2.236067977499789696409173668731276235440618359611525724270897245410\
52092563780489941441440837878227496950817615077378350425326772444707\
38635863601215334527088667781731918791658112766453226398565805357613\
50417533785003423392414064442086432539097252592627228876299517402440\
68161177590890949849237139072972889848208864154268989409913169357701\
97486788844250897541329561831769214999774248015304341150359576683325\
12498815178139408000562420855243542235556106306342820234093331982933\
95974635227120134174961420263590473788550438968706113566004575713995\
65955669569175645782219525000605392312340050092867648755297220567662\
53666074485853505262330678494633422242317637277026632407680104443315\
82573350589309813622634319868647194698997018081895242644596203452214\
11922329125981963258111041704958070481204034559949435068555518555725\
12388641655010262436312571024449618789424682903404474716115455723201\
73767659046091852957560357798439805415538077906439363972302875606299\
94822138521773485924535151210463455550407072278724215347787529112121\
21184331789335191038008011118179004590618846249647104244248308880129\
40681131469595327944789899893169157746079246180750067987712420484738\
05027736082915599139624489149435606834625290644083279446426808889897\
46046308353537875042061374757606883401879088192559117973574464190248\
53787114619409019191368803511039763843604128105811037869895185201469\
70456420217638928908844463778263858937924400460288754053984601560617\
05223615090385775410042193684987254271850375215557693316723004778269\
86666244621067846427248638527457821341006798564530527112418059597284\
94551954513101723097508714965294362829025400120477803241554644899887\
06177998190033606562243886409639287753517266295971438227956307956149\
52301544423501653891727864091304197939711135628213936745768117492206\
75621088878188736716716276226233798771115395096829828906830182590814\
01003895509723261508452834587893607346396117236678366571982607921440\
28911900899558424152249571291832321674118997572013940378819772801528\
87234186683454183828673002743153202296076286125247610286423469630201\
11802691220236015810127628430541861717618575140690101561629091763981\
26722596559628234906785462416185794558444265961285893756485497480349\
01108135575141664746219518302355259568865694958163530361955745368322\
35265007722422582873668753404700742232661451739766517420672644476219\
61802422039798353682983502466268030546768767446900186957209958589198\
31644025162091964618510574424827408722982041094371099223617528531530\
22121091762951208863569597169079462572603250897522297040434128808223\
32153390119551566514079022175646165421295787804223138207855367690772\
66664313165931954620687206464509148727440824881281776534751686790735\
91862464426874641991499778939913129472014591999678257620639485262503\
59428286402462255910378955634538283178235598391296251160036910131265\
90571971820018172436059551275785199832998928563860445871046933495186\
53903308428042182726036389445415780244174574723414697299996312510945\
62274695974331390549780162887681065496756275649338348884592698294163\
14014705091414179545350938687645239093723066241906715847602921854702\
04202383804367213501946179150579154936284590867887709863106792607614\
58338351692202921990110129607358608294473144079720147101521804634625\
00322640968716729635409696362198320488504654334438037866919275721757\
50574034787186060267180224742047834253180940526988056615337534872773\
02654212560646348138634668964687129063701162706217099466701519933557\
42489811672735082657817248126491279071442504852234055605731208646988\
56746034511488116745565359920634787280265752554024873596622892873895\
34106254498482094334002764956625731301298686836078008203561067901175\
44917331151045878316479416835459667456462305138521859918844800011212\
53357348715847944908169635303946872530537889777105440549557494671967\
07345552281518342410265386896750598329996187204923568853514555358003\
83838140761044092246496478265220865438336902461204725578709086492353\
99515073780835273005095702764926293166727667520471557985345977264323\
71679180727996367691655289824919618740861111192275946865226966098989\
93736217907139269656356257725072921684067893076388838914285333647436\
78983664741817149700533136079794881324210720612800521634225331990839\
87374632189144577621841557645544072733689630651234568235381958533331\
04476937662274370598384326381040313726244564143119975293684710411857\
07435156153121007354626195038244794777444936516114319489148096859756\
14704431968533532515615412403886080108510031662500603506818823438203\
85978076894500665976049002873593688338959190906091820627623243740913\
59957327323492119140006891940227050362692013131070406957762348299882\
54965283042711355278807814207741763646761360670007609360034961644118\
21936884052892804375410680200636057633288306182787896312806385645570\
96482902100637765037994014972457588431179148564043331412437618115617\
61006493539825945744207741473948128713349178405173131479571217191330\
68214071995664089267269297097899532777070209105459648458139969770739\
36560929194915253028687181018766424874866677410333142980118142113404\
97759716087436302522008807629760814504
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$
</pre>

## Úkol
> Spočítej číslo $\pi$ s přesností právě na 120 des. míst za des.č. a vásledek myší vypíšete na terminál:
> <pre>
> <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ echo &apos;scale=120; 4*a(1)&apos; | bc -l
> 3.141592653589793238462643383279502884197169399375105820974944592307\
> 816406286208998628034825342117067982148086513282306644
> </pre>
> `a()` znamená `arctangent()` (*arc***tangent()**)

> **Vtip:** *Proč si americký programátor plete Halloween (31. října) a Vánoce (25. prosince)?*  
> **Oct 31 = Dec 25**

> Proměnnou `ibase` nastavijeme základní číselnou soustavu, ve které číslo zadáváme. Implicitně 10, smí být 2-16.  
> Proměnná `obase` nastavuje základní č.s., ve které chceme mít výsledek.  
> Implicitně 10.

<pre>
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ bc -l
bc 1.07.1
Copyright 1991-1994, 1997, 1998, 2000, 2004, 2006, 2008, 2012-2017 Free Software Foundation, Inc.
This is free software with ABSOLUTELY NO WARRANTY.
For details type `warranty&apos;. 
ibase=10
obase=16
31
1F <font color="#a4a4a4"># výstup</font>
50
32 <font color="#a4a4a4"># výstup</font>
16
10 <font color="#a4a4a4"># výstup</font>
quit
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ 
</pre>

## Příklad 1:
> Zadejte `231185455` a převeďte v BC do s.č.11.
<pre>
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ bc -l
bc 1.07.1
Copyright 1991-1994, 1997, 1998, 2000, 2004, 2006, 2008, 2012-2017 Free Software Foundation, Inc.
This is free software with ABSOLUTELY NO WARRANTY.
For details type `warranty&apos;. 
ibase=10
obase=11
231185455
109553066
quit
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ 
</pre>

<pre>
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ bc -l
bc 1.07.1
Copyright 1991-1994, 1997, 1998, 2000, 2004, 2006, 2008, 2012-2017 Free Software Foundation, Inc.
This is free software with ABSOLUTELY NO WARRANTY.
For details type `warranty&apos;. 
ibase=11
109534421
231157939
quit
<font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ 
</pre>

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 07-04-26 H28
## Příklad 1
1. Vytvořte proměnnou a=4 a b=6 a vypočátejte `a^2+b^2`
2. Pro x=10 a y=3 spočítejte `(x + y) / y` s přesností na 2 des. místa

### Příklad 1.1 – pevné
```bash
#!/bin/sh

# 1.
a=4
b=6
result1=$(echo "$a^2 + $b^2" | bc)
echo "Výsledek příkladu: a^2 + b^2\nJe $result1\n\n"

# 2.
x=10
y=3
result2=$(echo "scale=2; ($x + $y) / $y" | bc)
echo "Výsledek příkladu: (x + y) / y\nJe $result2"
```

### Příklad 1.2 – libovolné
```bash
#!/bin/sh

# 1.
read -p "Zadejte hodnotu a: " a
read -p "Zadejte hodnotu b: " b
result1=$(echo "$a^2 + $b^2" | bc)
echo "Výsledek příkladu: a^2 + b^2\nJe $result1\n\n"

# 2.
read -p "Zadej hodnoty x: " x
read -p "Zadej hodnoty y: " y
result2=$(echo "scale=2; ($x + $y) / $y" | bc)
echo "Výsledek příkladu: (x + y) / y\nJe $result2"
```

## Příklad 2 – plnoletost
```bash
#!/bin/sh

read -p "Jaký je tvůj věk: " age

if [ $age -lt 18 ]; then
echo "Jsi mladší 18 let.";
elif [ $age -le 64 ]; then
echo "Jsi plnoletý a dospělý.";
else echo "Jsi plnoletý a senior.";
fi
```

## Přiklad 3 – Pravda/Nepravda
1. Načti dvě čísla `a` a  `b`.
2. Pomocí `bc` vyhodnoť zda jsou obě větší než `a > 0 && b > 0`.
3. Výsledek je buď `1` (pravda) nebo `0` (nepravda).
4. Script pomocí `&&` a `||` vypíše "Není OK" pokud alespoň 1 z čísel kladné.

```bash
#!/bin/sh

read -p "Zadej číslo a: " a
read -p "Zadej číslo b: " b

result=$(echo "$a > 0 && $b > 0" | bc)

if [ $result -eq 1 ]; then
echo "OK";
else echo "NO OK";
fi
```

`2>/dev/null` přesune do odložného souboru (chybové hlášky)

```bash
#!/bin/sh

read -p "Zadej číslo a: " a
read -p "Zadej číslo b: " b

result=$(echo "$a > 0 && $b > 0" | bc 2>/dev/null)

if [ $result -eq 1 ]; then
echo "OK";
else echo "NO OK";
fi
```

## Test
```bash
#!/bin/sh

read -p "Zadej délku odvěsny a: " a
read -p "Zadej délku odvěsny b: " b

c=$(echo "sqrt($a^2 + $b^2)" | bc)
echo "$c"

if [ $a -le 0 ] && [ $b -le 0 ];
then echo "Zadaj větší hodnoty!";
else echo "Správně!";
fi
```

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 21-04-26 H29
> Příkaz `case` v Bashi složí k větvení programu podle hodnoty proměnné výrazu - podobně jako switch (match) v jiných jazycích.

```bash
case <výraz> in
    vzor1)
        #<přikaz>
        ;;
    vzor2)
        #<přikaz>
        ;;
    *)
        #<výchozí přikaz>
        ;;
esac
```

> **Jak to funguje:**
> 1. `<výraz>` se porovnává s jednotlivými vzory (vzor1, vzor2, …).
> 2. Jakmile se najde první shoda, vykonají se odpovídající příkazy.
> 3. `;;` ukončuje danou větev (zabrání pokračování do dalších).
> 4. `*` je zástupný znak (default / else větev).

## Příkaz 1 – Čísla:
```bash
#!/bin/bash

read -p "Napiš číslo: " num

case $num in
    1)
        echo "Jedna"
        ;;
    2)
        echo "Dva"
        ;;
    *)
        echo "neznámé číslo"
        ;;
esac
```

## Příklad 2 – Písmenka:
> Požádá uživatele o zadání jednoho znaku
> Pomocí case rozohdne:
>       a -> vypíše `Zadal jsi písmeno A`
>       b -> vypíše `Zadal jsi písmeno B`
>       c -> vypíše `Zadal jsi písmeno C`
>       Pro jakýkoli jiný znak: `neznámý znak`

```Bash
#!/bin/bash

read -p "Zadej libovolný znak: " char

case $char in
    a)
        echo "Zadané písmeno je A"
        ;;
    b)
        echo "Zadané písmeno je B"
        ;;
    c)
        echo "Zadané písmeno je C"
        ;;
    *)
        echo "neznámý znak"
        ;;
esac
```

## Příklad 3 – Kalkulačka:
**Klasická s jednoduchými celočíselnými operacemi:**

```bash
#!/bin/bash

read -p "Zadej číslo a <znak> b oddělené mezerou: " a char b

case $char in
    +)
        res=$((a+b))
        echo "$res"
        ;;
    -)
        res=$((a-b))
        echo "$res"
        ;;
    /)
        res=$((a/b))
        echo "$res"
        ;;
    *)
        res=$((a*b))
        echo "$res"
        ;;
esac
```

**S využítím `bc` příkazu:**
```bash
#!/bin/bash

# naprogramuj kalkulačku, která (+, -, *, /) 2 čísla:

read -p "Zadej číslo a <znak> b oddělené mezerou: " a char b

case $char in
    +)
        echo "scale=2; $a + $b" | bc -l
        ;;
    -)
        echo "scale=2; $a - $b" | bc -l
        ;;
    /)
        echo "scale=2; $a / $b" | bc -l
        ;;
    *)
        echo "scale=2; $a * $b" | bc -l
        ;;
esac
```

## Příklad 4 – Alkohol Tester:
```bash
#!/bin/bash

read -p "Zadej své pohlaví (m/f) a před kolika minutami jste vypili pivo (oddělte mezerou): " gen min

case $gen in
    m)
        if [ $min -lt 180 ];
        then echo "Můžete řídit.";
        else echo "Můžete řídit za: $(($min-180))"
        fi
        ;;
    f)
        if [ $min -lt 240 ];
        then echo "Můžete řídit.";
        else echo "Můžete řídit za: $(($min-240))"
        fi
        ;;
    *)
        echo "Chyba!"
        ;;
esac
```

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 12-05-26 H30
## Maturitní zkoušky
### TASK 1
> Nastavte si adresář `/home/ubuntu2204/<vase_jmeno>` jako běžný.
> Vytvořte soubor `data_61b1f`mající 49 řádků, které jsou přesměrovány ze souboru `/etc/passwd`.
> Ověřte počet řádků v souboru `data_61b1f` a následně ho vypište.
> Vytvořte soubor `vystup_61b1f`, který bude obsahovat ty řádky původního soubroru, ve kterých nená žádný z řetěžcí `systemd` a `/var`.
> ! Příkazy čtou standartní výstup a vyfiltrováná data předávají na standartní výstup.
> ! Příkazy spojte do kolony. První příkaz do kolony vložte obsah souboru `data_61b1f`, druhým příkazem vyfiltrujte řetězec `systemd`, třetím příkazem vyfilstrujte `/var`.
> ! Výstup z kolony přesměrujte do souboru `vystup_61b1f` a zároveň vypište na obrazovku. Celý obsah terminálu přesměrujte do souboru `vase_prijmeni` a uložte.

#### Moje řešení
<pre>
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ mkdir tadeas
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~</b></font>$ cd tadeas
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/tadeas</b></font>$ touch data output vosyka
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/tadeas</b></font>$ cat /etc/passwd | tee data
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
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/tadeas</b></font>$ nl data
         1	root:x:0:0:root:/root:/bin/bash
         2	daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
         3	bin:x:2:2:bin:/bin:/usr/sbin/nologin
         4	sys:x:3:3:sys:/dev:/usr/sbin/nologin
         5	sync:x:4:65534:sync:/bin:/bin/sync
         6	games:x:5:60:games:/usr/games:/usr/sbin/nologin
         7	man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
         8	lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
         9	mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
        10	news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
        11	uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
        12	proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
        13	www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
        14	backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
        15	list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
        16	irc:x:39:39:ircd:/run/ircd:/usr/sbin/nologin
        17	gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
        18	nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
        19	systemd-network:x:100:102:systemd Network Management,,,:/run/systemd:/usr/sbin/nologin
        20	systemd-resolve:x:101:103:systemd Resolver,,,:/run/systemd:/usr/sbin/nologin
        21	messagebus:x:102:105::/nonexistent:/usr/sbin/nologin
        22	systemd-timesync:x:103:106:systemd Time Synchronization,,,:/run/systemd:/usr/sbin/nologin
        23	syslog:x:104:111::/home/syslog:/usr/sbin/nologin
        24	_apt:x:105:65534::/nonexistent:/usr/sbin/nologin
        25	tss:x:106:112:TPM software stack,,,:/var/lib/tpm:/bin/false
        26	uuidd:x:107:115::/run/uuidd:/usr/sbin/nologin
        27	systemd-oom:x:108:116:systemd Userspace OOM Killer,,,:/run/systemd:/usr/sbin/nologin
        28	tcpdump:x:109:117::/nonexistent:/usr/sbin/nologin
        29	avahi-autoipd:x:110:119:Avahi autoip daemon,,,:/var/lib/avahi-autoipd:/usr/sbin/nologin
        30	usbmux:x:111:46:usbmux daemon,,,:/var/lib/usbmux:/usr/sbin/nologin
        31	dnsmasq:x:112:65534:dnsmasq,,,:/var/lib/misc:/usr/sbin/nologin
        32	kernoops:x:113:65534:Kernel Oops Tracking Daemon,,,:/:/usr/sbin/nologin
        33	avahi:x:114:121:Avahi mDNS daemon,,,:/run/avahi-daemon:/usr/sbin/nologin
        34	cups-pk-helper:x:115:122:user for cups-pk-helper service,,,:/home/cups-pk-helper:/usr/sbin/nologin
        35	rtkit:x:116:123:RealtimeKit,,,:/proc:/usr/sbin/nologin
        36	whoopsie:x:117:124::/nonexistent:/bin/false
        37	sssd:x:118:125:SSSD system user,,,:/var/lib/sss:/usr/sbin/nologin
        38	speech-dispatcher:x:119:29:Speech Dispatcher,,,:/run/speech-dispatcher:/bin/false
        39	fwupd-refresh:x:120:126:fwupd-refresh user,,,:/run/systemd:/usr/sbin/nologin
        40	nm-openvpn:x:121:127:NetworkManager OpenVPN,,,:/var/lib/openvpn/chroot:/usr/sbin/nologin
        41	saned:x:122:129::/var/lib/saned:/usr/sbin/nologin
        42	colord:x:123:130:colord colour management daemon,,,:/var/lib/colord:/usr/sbin/nologin
        43	geoclue:x:124:131::/var/lib/geoclue:/usr/sbin/nologin
        44	pulse:x:125:132:PulseAudio daemon,,,:/run/pulse:/usr/sbin/nologin
        45	gnome-initial-setup:x:126:65534::/run/gnome-initial-setup/:/bin/false
        46	hplip:x:127:7:HPLIP system user,,,:/run/hplip:/bin/false
        47	gdm:x:128:134:Gnome Display Manager:/var/lib/gdm3:/bin/false
        48	ubuntu2204:x:1000:1000:ubuntu2204,,,:/home/ubuntu2204:/bin/bash
        49	vboxadd:x:999:1::/var/run/vboxadd:/bin/false
    <font color="#26A269"><b>ubuntu2204@ubuntu-20</b></font>:<font color="#12488B"><b>~/tadeas</b></font>$ cat data | grep -v systemd | grep -v /var | tee output
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
</pre>

#### Řešení
```bash
#!/bin/bash

read -p "Vytvoř adresář /home/ubuntu2204/, zadejte jmeno: " adr

mkdir -p ~/$adr
cd ~/$adr

# vytvoření souboru data
head -n 49 /etc/passwd > data_61b1f

# ověření počtu řádků
echo "počet řádků v souboru:"
wc -l data_61b1f

# vypis souboru
echo "Obsah souboru data_61b1f:"
cat data_61bf1

# vytvoření vystupu pomocí kolony
cat data_61b1f | grep -v systemd | grep -v /var > vystup_61b1f

# vypis vystupního souboru
echo "Obsah souboru vystup_61b1f:"
cat vystup_61b1f

# oveření počtu řádků
echo "Počet řádků v souboru vyfiltrovaném:"
wc -l vystup_61b1f
```

### TASK 2
> Napiš program na pythagorovu větu (`c^2 = a^2 + b^2`).
> Uživatel zadá `a` a `b`.
> Spočítáš délku přepony `c` a vypiš výsledek zaokrouhlený na 2 desetinná místa.
> Pomocí konstrokce `if-else` ošetři, kdy uživatel zadá délku odvěsen menší nebo rovno nule.
> Program ulož do `linux_prijmeni`.
>
> ? odmocnina `sqrt` nebo `||`, předejte `bc -`l, zaokrouhlení `scale`.

#### Moje řešení
```bash
#!/bin/sh

read -p "Zadejte odvěsny a: " a
read -p "Zadejte odvěsny b: " b

c=$(echo "scale=2; sqrt($a^2 + $b^2)" | bc -l)

if [ $a -le 0 ] && [ $b -le 0 ];
then echo "Zkuste to znovu. Zadejte hodnoty větší než 0!";
else echo "a = $a\nb = $b\nc = $c";
fi
```

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# 02-06-26 H31

## Moje řešení
```bash
#!/bin/sh

read -p "Zadej své pohlaví (m/f): " gen
read -p "Zadej před kolika minutami jste požili poslední pivo (0.5 l [10stupňové]): " min

echo "Vaše pohlaví: $gen\nPoslední alkohol: $min min ($(($min/60)) h)"


case $gen in
    m)
        if [ $min -lt 180 ];
        then echo "Váš stav řízení: Můžete řídit bez starostí.";
        else echo "Váš stav řízení: Můžete řídit za $(($min-180)) min ($(($min/60)) h)"
        fi
        ;;
    f)
        if [ $min -lt 240 ];
        then echo "Váš stav řízení: Můžete řídit bez starostí.";
        else echo "Váš stav řízení: Můžete řídit za $(($min-240)) min ($(($min/60)) h)"
        fi
        ;;
    *)
        echo "Chyba!"
        ;;
esac
```

### Estetičtější (NEFUNGUJE ???)
```bash
#!/bin/sh

read -p "Zadej své pohlaví (m/f): " gen
read -p "Zadej před kolika minutami jste požili poslední pivo (0.5 l [10stupňové]): " min

if [ $gen = "m" ];
then echo "Vaše pohlaví: muž";
else if [ $gen = "f" ];
then echo "Vaše pohlaví: žena";
else echo "ERROR";
fi

echo "Vaše pohlaví: $gen\nPoslední alkohol: $min min ($(($min/60)) h)"

case $gen in
    m)
        if [ $min -lt 180 ];
        then echo "Váš stav řízení: Můžete řídit bez starostí.";
        else echo "Váš stav řízení: Můžete řídit za $(($min-180)) min ($(($min/60)) h)"
        fi
        ;;
    f)
        if [ $min -lt 240 ];
        then echo "Váš stav řízení: Můžete řídit bez starostí.";
        else echo "Váš stav řízení: Můžete řídit za $(($min-240)) min ($(($min/60)) h)"
        fi
        ;;
    *)
        echo "Chyba!"
        ;;
esac
```

## Řešení učitelky
```bash
#!/bin/sh

read -p "Zadej své pohlaví (m/f): " gen
read -p "Zadej před kolika minutami jste požili poslední pivo (0.5 l [10stupňové]): " min

case $gen in
    m)
        limit=180
        ;;
    f)
        limit=240
        ;;
    *)
        echo "ERROR!"
        ;;
esac

if [ $min -ge $limit ];
then echo "Můžete řídit.";
else
	zbt=$((limit - min))
	echo "Můžeš řídit za $zbt minut!"
fi
```

## Cyklus FOR
```bash
#!/bin/sh

for variable in 00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20
do
	echo $variable
done
```

### Nejmenší možné spracování:
```bash
#!/bin/sh

for variable in 00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20
do echo $variable
done
```

> Vždy musí být `for`, `do` a `done` na samostatném řádku!

## Hledání souboru pomocí FOR
Napiš program, který projde danou složku a zjistí, zda daná "položka" je souborem nebo není. (Použij FOR)

```bash
#!/bin/sh

path="/home/ubuntu2204/Plocha/"

for i in `ls $path`
do
	if [ -f $i ];
	then echo "$i je souborem!";
	else echo "$i není souborem!";
	fi
done
```

```bash
#!/bin/sh

for i in *
do
	if [ -f $i ];
	then echo $i
	fi
done
```

```bash

```




<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# ??-??-26 H32
…

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# ??-??-26 H33
…

<br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
| ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- | <br>
<br>

# ??-??-26 H34
…

<br>
| ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== | <br>
| ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== | <br>
| ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== | <br>
<br>

## Alt kódy  
| *Name*      | *Symbol* | *Alt+* |
| :--         | :-:      | --:    |
| en dash     | –        | *0150* |
| em dash     | —        | *0151* |
| backtick    | `        | *96*   |
| H. Ellipsis | …        | *0133* |