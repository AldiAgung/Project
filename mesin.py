# from tampilan import tampilan
from flask import Flask as fk, request, render_template
import pickle

app = fk(__name__)
model = pickle.load(open('model.pkl', 'rb'))
# app.register_blueprint(tampilan, url_prefix = "/tampilan")

@app.route('/')
def beranda():
    return render_template('interface.html')

@app.route('/tampilan', methods = ['POST'])
def prediksi():
    Brand = str(request.form['Brand'])
    nama = str(request.form['nama'])
    hasil = model.prediksi([nama, Brand])
    output = round(hasil[0])
    return render_template('interface.html', teks_prediksi = f'Sebuah merek hp dengan nama {nama} dengan model {Brand} mempunyai spesifikasi ${output}')

if __name__ == "__main__":
    app.run(debug =  True, port = 8000)