# Hoop.py
# Author: Henry Rivas
# Date: 12/16/2019
# Desc: 8th Kyu Problem on Codewars

def hoop_count(n):

    if n >= 10:
        return ("Great, now move on to tricks")
    else:
        return ("Keep at it until you get it")

def main():

    print(hoop_count(3))

main()
