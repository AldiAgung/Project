import pandas as panda
import numpy as np
from tampilan import tampilan
from flask import Flask as fk, request, render_template
import pickle

app = fk(__name__)
app.register_blueprint(tampilan, url_prefix = "/tampilan")

if __name__ == "__main__":
    app.run(debug =  True, port = 8000)