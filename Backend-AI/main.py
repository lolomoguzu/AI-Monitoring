from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random
import time
import math
app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

last_humidity = None
last_updated = 0
last_time = time.time()
water_level = 50

# Simulated humidity data
@app.get("/humidity")
async def get_humidity():
    global last_humidity, last_updated
    
    # Check if 5 seconds have passed
    current_time = time.time()
    if current_time - last_updated > 5:
        last_humidity = random.randint(20, 80)  # Generate a new value
        last_updated = current_time  # Update timestamp

    return {"humidity": last_humidity}

@app.get("/temperature")
async def get_temperature():
       
    temperature = random.randint(20, 30)
    return {"temperature": temperature}

@app.get("/water-level")
async def get_water_level():
    global last_time, water_level
    
    current_time = time.time()
    elapsed_time = current_time - last_time
    
    # Generate a smooth variation using a sine wave + randomness
    water_level = int(40 + 30 * math.sin(current_time / 3) + random.randint(-5, 5))

    last_time = current_time

    return {"time": int(current_time), "Water": water_level}