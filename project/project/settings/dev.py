from .common import *

DEBUG = True

SECRET_KEY = 'django-insecure-hq)$k3qf(y=!l%q%$f#1g)#h8*2&3rw=^p3zm13d5qyk9wh%72'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'project',
        'HOST': 'mysql',
        'USER': 'root',
        'PASSWORD': 'MyPassword'
    }
}
