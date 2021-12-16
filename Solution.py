// Write your code here
def findMissingDigit(exp):

	exp = list(exp.split())
	
	first_operand = exp[0]
	second_operand = exp[2]
	third_operand = exp[4]
	resultant = exp[-1]

	if '?' in resultant:
		x = resultant
		first_operand = int(first_operand)
		second_operand = int(second_operand)
		third_operand = int(third_operand)

		res = first_operand * second_operand + third_operand
	
	else:

		resultant = int(resultant)

		if '?' in first_operand:

			x = first_operand
			second_operand = int(second_operand)
			third_operand = int(third_operand)

			res = int((resultant - third_operand)/second_operand)
		elif '?' in second_operand:
		    x = second_operand
		    first_operand = int(first_operand)
		    third_operand = int(third_operand)
		    res = int((resultant - third_operand)/first_operand)
		
		else:
		    
			x = third_operand
			first_operand = int(first_operand)
			second_operand = int(second_operand)

			res = resultant-(first_operand*second_operand)
			
	res = str(res)
	k = 0
	if len(res)==len(x):
	    for i in x:
		    if i == '?':
			    result = res[k]
			    break
		    else:
			    k = k + 1
	else:
	    result = -1
	return result
	    
exp = input()
print(findMissingDigit(exp))
