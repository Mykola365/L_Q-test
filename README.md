Test Case ID	1	
	Test Case Title	Valid Login	
	Test Case Objective	Login	
			
Test script:		
	Precondition		
	User is on the login page		
			
№	Steps	Data	Expected result
1	Enter valid login into "Login" field	  standard_user	      Data is entered to the field
2	Enter valid password into "Password" field	    secret_sauce	  Data is entered to the field, data is reprresented as dots instead of characters
3	Click "Login" button		User is redirected to the inventory page. Products and cart are displayed
