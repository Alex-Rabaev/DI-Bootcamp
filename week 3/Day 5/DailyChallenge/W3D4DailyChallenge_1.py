import requests
import time

url = input('input url: ')

start_time = time.time()
r = requests.get(url)
delta = time.time() - start_time
print(delta)

