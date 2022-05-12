from rest_framework import generics
from .serializer import ProfilesSerializer
from .models import Profile
from .permissions import IsOwnerOrReadOnly

class Profile_List(generics.ListCreateAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = Profile.objects.all()
    serializer_class = ProfilesSerializer

class Profile_Detail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = Profile.objects.all()
    serializer_class = ProfilesSerializer
