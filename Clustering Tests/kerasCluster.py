from keras.preprocessing import image
from keras.applications.vgg16 import VGG16
from keras.applications.vgg16 import preprocess_input
import numpy as np
from sklearn.cluster import KMeans
import glob

model = VGG16(weights='imagenet', include_top=False)
model.summary()

img_path = 'train/grass_000.JPEG'
img = image.load_img(img_path, target_size=(224, 224))
img_data = image.img_to_array(img)
img_data = np.expand_dims(img_data, axis=0)
img_data = preprocess_input(img_data)

vgg16_feature = model.predict(img_data)

print(vgg16_feature.shape)


# Idea: Use glob and the file names to implment this. I think it's kind of cheating given our goal w the project but it should work fine overall

# Use silhouette coefficient to validate https://scikit-learn.org/stable/modules/clustering.html#silhouette-coefficient

vgg16_feature_list = []

filenames = glob.glob('../example-data/images/*.JPEG')
# images = [cv2.imread(fname) for fname in filenames]
print(filenames)
for img_path in filenames:
    print(img_path)
    # Code to take an image and add it to the model feature list
    img = image.load_img(img_path, target_size=(224, 224))
    img_data = image.img_to_array(img)
    img_data = np.expand_dims(img_data, axis=0)
    img_data = preprocess_input(img_data)

    vgg16_feature = model.predict(img_data)
    vgg16_feature_np = np.array(vgg16_feature)
    vgg16_feature_list.append(vgg16_feature_np.flatten())

# Take the feature list, make it into a numpy array, and then fit a k means model to it.
vgg16_feature_list_np = np.array(vgg16_feature_list)
kmeans = KMeans(n_clusters=2, random_state=0).fit(vgg16_feature_list_np)
#TODO Visualize the result of kmeans
#TODO Add the default clustering code
#TODO Decide if this is a good solution
