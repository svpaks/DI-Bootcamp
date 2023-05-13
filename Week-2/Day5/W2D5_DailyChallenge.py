# #Instructions
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension


user_answer = input("Enter a comma separated sequence of words")
print(user_answer)
words = user_answer.split(",")
print(words)
words = sorted(words)
print(words)
new_words = ','.join(word for word in words)
print(new_words)
