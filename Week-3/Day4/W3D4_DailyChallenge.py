# Instructions :
# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.



# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.


# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

# Implement a classmethod that returns a Text instance but with a text file:

#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.


# Now, use the provided the_stranger.txt file and try using the class you created above.



# Bonus:
# Create a class called TextModification that inherits from Text.

# Implement the following methods:
# a method that returns the text without any punctuation.
# a method that returns the text without any english stop-words (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)



class Text:

    def __init__(self, text):
        self.sentence = text.replace(".", "").lower()
        self.frequencies_word = self.frequencies()

    #helper function
    def frequencies(self) :
        frequent_word = {}
        lst_sentence = self.sentence.split(" ")
        for word in lst_sentence :
            if word not in frequent_word :
                frequent_word[word] = 1
            else :
                frequent_word[word] += 1
        return frequent_word
    
    def most_common_words(self) :
        lst_common_words = []
        for key, value in self.frequencies_word.items():
            if value == max(self.frequencies_word.values()):
                lst_common_words.append(key)
        return lst_common_words

    def unique_words(self) :
        unique_words = []
        for key, value in self.frequencies_word.items():
            if value == 1 :
                unique_words.append(key)
        return unique_words

    def count_occurrence_word(self, word):
        # count the occurrence of a word in the sentence
        try :
            if type(word) is not str :
                raise TypeError("Not the right data type")
            else :
                lst_sentence = self.sentence.split(" ")
                amount_time = lst_sentence.count(word)
                if amount_time == 0 :
                    return None
                else :
                    return f"The word {word} was found {amount_time} times"
        except TypeError as error:
            print(error)

    @classmethod #cls refers to THIS class
    def from_file(cls, file):
        with open(file, "r") as story :
            return cls(story.read())

# t1=Text("A good book would sometimes cost as much as a good house.")
# # print(t1.count_occurrence_word(12))
# print(t1.count_occurrence_word("house"))
# print(t1.frequencies_word)
# print(t1.most_common_words())
# print(t1.unique_words())
t2 = Text.from_file('the_stranger.txt')
# print(t2.count_occurrence_word("house"))
# print(t2.frequencies_word)
# print(t2.most_common_words())
# print(t2.unique_words())


import nltk
nltk.download('stopwords')
# from nltk.corpus import stopwords

import string
import nltk #pip install nltk
# nltk.download('stopwords')
from nltk.corpus import stopwords

class TextModification(Text) :

    def without_punctuation(self) :
        result = list(string.punctuation)
        for char in self.sentence :
            if char in result :
                self.sentence = self.sentence.replace(char, "")
        return self.sentence
    
    def without_stop_words(self) :
        stops = set(stopwords.words('english'))
        lst_sentence = self.sentence.lower().split()
        final = ""
        for char in lst_sentence :
            if char not in stops :
                final += char + " "
                self.sentence = final.strip()
        return self.sentence


t1 = TextModification("A good book, would sometimes -cost as much as a good #house.")
print(t1.without_punctuation())
print(t1.without_stop_words())




# {
#     "good" : 2,
#     "house" : 4,
#     "book" : 1
# }