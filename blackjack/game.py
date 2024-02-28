# Made by Owen Eastman, Jan 29 2024

import random
from random import randint
# random number lib

# function to give cards to players
def addcards(amount, domain):
	for i in range(amount):
		card = randint(1, 12)
		if card > 10:
			card = 10
		domain.append(card)

def check(domain):
	total = 0
	for i in range(len(domain)):
		total += domain[i]
	if total <= 21:
		return False
	elif total > 21:
		return True

print("Welcome to gambling")
pcount = input("How many players?\n")
pcount = int(pcount)

# ensure that player count is a positive nonzero number
while pcount <= 0:
	pcount = input("Only positive numbers, how many players?\n")
	pcount = int(pcount)

# get player names
pnames = []
pstatus[]
for i in range(pcount):
	pnames.append(input("Player " + str(i+1) + " name?\n"))
	pstatus.append(True)
print("")

# deal dealer cards
dcards = []
addcards(2, dcards)
print("Dealer's cards: " +str(dcards))

# deal and display player cards
pcards = []
for i in range(pcount):
	pcards.append([])
	addcards(2, pcards[i])
	print(str(pnames[i]) + "'s cards: " + str(pcards[i]))
print("")

# hit stand choice
def mchoice():
	for i in range(pcount):
		if pstatus:
			choice = input(str(pnames[i]) + ", hit or stand? (h/s)\n")
			if choice == "h":
				addcards(1, pcards[i])
			elif choice == "s":
				continue
			else: print("invalid option, standing")
print(pcards)
# show and update player status in round
def rend():
	for i in range(pcount):
		check(pcards[i])
		if check(pcards[i]):
			print(pnames[i] + " bust")
			pstatus[i] = False
		else: continue
