# Century
# Date: 4/27/2020
# Author: Henry Rivas
# Desc: Fundamental Problem
#       calculate century from a year

def century(year):
    return (year - 1) // 100 + 1

def main():

    print(century(1709));

main()
