# Made by Owen Eastman, Jan 29 2024
# discontinued because I have no idea what I was doing before, and I don't know how to make it work again

import random
from random import randint
# random number lib

# init starting variables
pnames = []
pstatus = []
psuccess = []
dcards = []
pcards = []
ctotal = []
cstatus = 0
rcount = 0

# function to give cards to players
def addcards(amount, domain):
	for i in range(amount):
		card = randint(1, 12)
		if card > 10:
			card = 10
		domain.append(card)

# function to check if player goes over 21
def check(domain):
	total = 0
	for i in range(len(domain)):
		total += domain[i]
	if total <= 21:
		return False
	elif total > 21:
		return True

# function to show and update player status in round
def rend():
	for i in range(pcount):
		check(pcards[i])
		if check(pcards[i]):
			print(pnames[i] + " bust")
			pstatus.append(True)
		else: 
			pstatus.append(False)
			continue
# function to check player cards against dealer cards
# TODO: add to psuccess
def dcheck():
	for i in range(pcount):
		if sum(pcards[i]) >= sum(dcards) and pstatus[i]:
			print(f"{pnames[i]} success")
			psuccess[i] = True
		elif sum(dcards) > 21 and sum(pcards[i]) <= 21:
			print(f"{pnames[i]} success")
			psuccess[i] = True
		else:
			print(f"{pnames[i]} failure")
			psuccess[i] = False

# function to display player cards
# still works but doesn't throw error anymore
def ldisplay(cvar):
	print(str(pnames[cvar]) + "'s cards: " + str(pcards[cvar]) + " & total = " + str(sum(pcards[cvar])))

# function for hit stand choice
def mchoice():
	global cstatus
	cstatus = 0
	for i in range(pcount):
		rend()
		if pstatus[i]:
			choice = input(str(pnames[i]) + ", hit or stand? (h/s)\n")
			if choice == "h":
				addcards(1, pcards[i])
				ldisplay(i)
			elif choice == "s":
				cstatus += 1
				continue
			else: 
				print("invalid option, standing")
				cstatus += 1
				continue

# !!! INTRO SEQUENCE START !!!
print("Welcome to gambling")

while True:
	try:
		pcount = input("How many players?\n")
		pcount = int(pcount)
		break
	except:
		print("Error recieved, please input number.")
		continue
# ensure that player count is a positive nonzero number

# i don't feel like adding type checking to this so just don't be stupid probably
while pcount <= 0:
	pcount = input("Only positive numbers, how many players?\n")
	pcount = int(pcount)
for i in range(pcount):
	psuccess.append(True)

# get player names

for i in range(pcount):
	pnames.append(input("Player " + str(i+1) + " name?\n"))
	pstatus.append(True)
print("")
# !!! INTRO SEQUENCE END !!!

# loop for multiple round support (sort of)
while True:
	if rcount >= 4:
		break
	# deal dealer cards
	while sum(dcards) < 16:
		addcards(2, dcards)
	print(f"Dealer's cards: {str(dcards)} & sum = {str(sum(dcards))}")

	# deal and display player cards
	for i in range(pcount):
		pcards.append([])
		addcards(2, pcards[i])
		ldisplay(i)

	# debug printing ftw
	print("")
	
	# allow players to keep going if they want
	while True:
		if cstatus == pcount or all(pstatus):
			break
		else:
			continue
		
	print(pcards)
	rend()
	dcheck()
	rcount += 1