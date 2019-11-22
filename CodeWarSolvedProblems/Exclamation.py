# Exclamation!.py
# Author: Henry Rivas
# Date: 11/22/2019
# Desc: 8th Kyu Problem in Code Wars! Remove the last
#       exclamation point at the end of your string.

def remove (s):
    if ( s.endswith("!")):
        s = s[:-1]

    return s
        
def main():

    print(remove("!Hello"))

main()
