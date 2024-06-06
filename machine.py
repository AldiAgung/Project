import pandas as panda
import numpy as np
from flask import Flask as fk, request
import pickle

app = fk(__name__)

@app.route("/")
def hallo():
    return "halo ini adalah halaman utama <h1> HALLO <h1>"

if __name__ == "__main__":
    app.run()