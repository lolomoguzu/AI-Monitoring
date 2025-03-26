from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sensors  # Import the sensor module

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Endpoints for Sensor Data
@app.get("/humidity")
async def get_humidity():
    return {"humidity": sensors.get_humidity()}

@app.get("/temperature")
async def get_temperature():
    return {"temperature": sensors.get_temperature()}

@app.get("/water-level")
async def get_water_level():
    return sensors.get_water_level()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
