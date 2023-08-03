import random

colors = ["bleu", "jaune", "rouge", "vert", "violet", "orange", "marron", "gris"]
code = ["vert", "vert", "gris", "violet"]
input = []
win = False
maxGuess = 10

def gameOn():
    while maxGuess != 0:
        if win == False:
            randomGuess()
        else:
            print("C'est gagné, c'est gagné !")

def randomGuess():
    input = random.choices(colors, k=4)
    print(input)
    colorCheck(input)


def colorCheck(guess):
    for i in range(len(guess)):
        for j in range(len(colors)):
            if guess[i] == colors[0] or guess[i] == colors[1] or guess[i] == colors[2] or guess[i] == colors[3] or guess[i] == colors[4] or guess[i] == colors[5] or guess[i] == colors[6] or guess[i] == colors[7]:
                if i == 3 and j == 7:
                    inputCheck(guess)
            else:
                print("Pas bien")
                """ gameOn() """
                

def inputCheck(botcode):
    if botcode == code:
        win = True
        print(win)
    else:
        maxGuess-=1
        print("T'es mauvais Jack !")
        
    gameOn()

gameOn()