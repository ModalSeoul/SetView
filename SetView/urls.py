from django.conf import settings
from django.contrib import admin
from django.conf.urls import url, include
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from Sets.views import SetViewSet, ImageViewSet, UserViewSet, IndexView


router = DefaultRouter()
router.register(r'users', UserViewSet, base_name='users')
router.register(r'sets', SetViewSet, base_name='sets')
router.register(r'images', ImageViewSet, base_name='images')

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^.*$', IndexView.as_view(), name='index'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
