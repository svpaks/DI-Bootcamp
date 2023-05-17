from W3D2_ExerciseXP import Dog
import random

class PetDog(Dog):
    def __init__(self, name_dog, age_dog, weight_dog):
        super().__init__(name_dog, age_dog, weight_dog)
        self.trained = False

    def train(self):
        bark_output = self.bark()
        self.trained = True
        return bark_output

    def play(self, *args):
        dog_names = ", ".join(args)
        return(f"{dog_names} all play together.")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll.",
                f"{self.name} stands on his back legs.",
                f"{self.name} shakes your hand.",
                f"{self.name} plays dead."
            ]
            random_trick = random.choice(tricks)
            return random_trick
        else:
            return f"{self.name} is not trained to do tricks."
    