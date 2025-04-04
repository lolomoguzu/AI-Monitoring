import random
import time
import math

# Global Variables for Sensor Data Caching
last_humidity = None
last_updated = 0
last_time = time.time()
water_level = 100,

def get_humidity():
    """Simulate humidity data with caching."""
    global last_humidity, last_updated
    current_time = time.time()
    
    if current_time - last_updated > 5:
        last_humidity = random.randint(1, 100)  
        last_updated = current_time  

    return last_humidity

def get_temperature():
    """Simulate temperature data."""
    return random.randint(20, 30)

def get_water_level():
    """Simulate water level with smooth variation."""
    global last_time, water_level
    
    current_time = time.time()
    elapsed_time = current_time - last_time
    
    # Generate a smooth variation using a sine wave + randomness
    water_level = int(20 + 10 * math.sin(current_time / 3) + random.randint(-1, 1))

    last_time = current_time

    return {"time": int(current_time), "Water": water_level}
