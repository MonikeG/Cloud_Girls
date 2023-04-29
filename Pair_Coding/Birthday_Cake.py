
import math
import os
import random
import re
import sys

#
# Complete the 'birthdayCakeCandles' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY candles as parameter.
#

def birthdayCakeCandles(candles):
    # Write your code here
    #1 - comparar os numeros e armazenar os maiores
    maior = 0 
    contagem = 1
    for i in candles:
        if i > maior:
            maior = i 

    #2 - contar os numeros armazenados
    
    for i in candles:
        if i == maior:
            contagem += 1
    return contagem
    
    
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    candles_count = int(input().strip())

    candles = list(map(int, input().rstrip().split()))

    result = birthdayCakeCandles(candles)

    fptr.write(str(result) + '\n')

    fptr.close()

