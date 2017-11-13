# style_transfer

Style transfer merges the style of an image and the content of another image to produce a really cool result.

The style part takes the Texture of the image -- the broader, location independent parts of the image, pixels relative to their surrounding pixels. This relationship could be mathematically expressed using Gram matrices.

The content part makes sure that the pixels in the resulting image are close to that of the content image.

See http://tinyurl.com/StyleTransferDemo for demo slides.


### Testing

Must have tensorflow, numpy, PIL, scipy, six installed

```python3
pip3 install tensorflow, numpy, PIL, scipy, six
```

Must download "imagenet-vgg-verydeep-19.mat" - 535 MB

Removed graphs folder (2.4 GB) and checkpoints folder (1.5 GB) to save space --> so need to retrain

* Code
* Examples

Tested on Linux Ubuntu 16.04 LTS, Python 2.7.12, 3.5.2
