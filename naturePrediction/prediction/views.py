from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.template import loader
import numpy as np
from PIL import Image
from tensorflow.keras.models import load_model
from keras.preprocessing import image
from .models import *
def index(request):
    load = loader.get_template('index.html')
    return HttpResponse(load.render({},request))

def predict(request):
    
    img = request.FILES['images']
    model=load_model('prediction/bestmodel.h5')
    data = photos.objects.get(id = 1)
    data.image = img
    data.save()

    labels = {0:"buildings",1:"forest",2:"glacier",3:"mountain",4:"sea",5:"street"}
    img = Image.open(img)
    img=image.smart_resize(img,(150,150))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = img/255
    
    prediction=model.predict(img)
    classes=labels[np.argmax(prediction)]
    data = photos.objects.get(id = 1)
    load = loader.get_template('result.html')
    context = {
       'data' : data,
       'classes':classes,
    }
    return HttpResponse(load.render(context,request))
    
def back(request):
    return redirect('/')