<img src='/images/projects/crop_segmentation.png' />

#### Background

The client, a rising startup, was developing solutions for crop monitoring and risk estimation in order to provide secure agricultural credit. The core technology is a monitoring platform that uses AI to analyze satellite images and generate estimates for areas of interest.

#### The Problem

The first step toward accurate analysis is proper handling of crop field boundaries (talhões), since they affect all downstream processes that use those areas as reference. Several challenges are involved — from computational challenges dealing with large images and building optimized algorithms, to domain challenges in interpreting results from both a remote sensing and a business perspective.

#### The Solution

The project involved extracting soybean crop information solely from satellite images using deep learning models. The first step was semantic segmentation via deep learning to extract the different cultivation areas (parcels). With that information, historical data for each area was analyzed to build productivity analysis and yield forecasting models.

#### Results

These results are of great value to both the business and its clients, with significant impact on decisions and on the trust the company generates. Computationally, the segmentation model achieved a 7% improvement over previously used methods — a significant advance given that best-in-class technologies were already in use and the dataset spanned several gigabytes, meaning a large sample was used for testing and the results are statistically reliable.

**Stacks:** Python, TensorFlow, scikit-image, OpenCV, gdal, rasterio, scikit-learn, AWS (s3, ec2).
