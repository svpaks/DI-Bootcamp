
#1

sentenсе = input("please, write the sentenсе with ten characters long")
b = len(sentenсе)
if b < 10:
    print("string is not long enough")
elif b > 10:
    print("string is long enough")
else: 
    print("string too long")

#2

print(sentenсе[0], sentenсе[b-1])

#3

sentence = "Computer"

for letter in sentenсе :
    print(letter)

# 1st loop 
# C 

# 2nd loop 
# o 

# 3rd loop 
# m 

# BUT WE NEED C, Co, Com, ...


# C
# Co
# Com 

sentence = "Computer"
new_sentence = ""


for letter in sentenсе :
    new_sentence = new_sentence + letter
    # new-sentence += letter
    print(new_sentence)


# 1st loop 
# new_sentence = "" + "c" --> "c"

# 2nd loop 
# new_sentence = "c" + "o" --> "co"

# 3rd loop 
# new_sentence = "co" + "m" --> "com"

