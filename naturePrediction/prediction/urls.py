from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.index,name="index"),
    path('predict/',views.predict,name="predict"),
    path('predict/return/',views.back,name="back"),


]