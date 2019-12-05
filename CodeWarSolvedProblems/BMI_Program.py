# BMI_Program.py
# Author: Henry Rivas
# Date: 12/4/2019
# Desc: 8th Kyu Problem in Code Wars!
#       that test if and else statements!

def bmi(weight, height):

    bmi = weight / ( height * height )

    if bmi <= 18.5:
        print("Underweight")
        return bmi
    if bmi <= 25.0:
        print("Normal")
        return bmi
    if bmi <= 30.0:
        print("Overweight")
        return bmi
    if bmi > 30:
        print("Obese")
        return bmi

def main():

    print(bmi(80, 1.8))

main()
