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


# VARIANT2
def retrieve_string_sorted(words) :
    word_list = words.split(",")
    new_strings = ",".join([word for word in word.list.sort()])
    # new_string = ",".join(sorted(word_list))
    print(new_strings)

# retrieve_string_sorted("without, hello, bag. world")


