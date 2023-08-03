import requests 
import json
url = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp"
data = json.loads("""{
    "login_id":"test@sunbasedata.com",
    "password":"Test@123"
}""")
# print(data) 
response = requests.post(url, data)
print(response.json) 