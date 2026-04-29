<img src='/images/projects/ball-tracking.png' />

#### Background

Mantis-AI (formerly Isportistics) is a company focused on sports video interpretation and content tagging using AI.
One of its solutions provides game coverage through an autonomous camera, transforming a panoramic view into a broadcast view of matches (<a href="https://vimeo.com/640142052">see an example here</a>).

#### The Problem

Tracking and detecting the focal point is highly challenging because solutions needed to be as agnostic as possible to the type of sport. Each sport has its own particularities, and real-world scenarios differed significantly from the training environment. A product already existed but was heavily limited to a few sports and certain scenarios.

#### The Solution

The solution focuses on sports involving a ball, as they represent a significant share of the company's clients. The hypothesis is that the ball is the concentration point of the players — the game happens around it.

The developed solution adds real-time object detection neural networks combined with motion and spatial analysis algorithms. In summary, a computer vision machine learning model was trained for object detection, using optical flow and motion analysis methods to optimize the focal point of interest in the scene, creating a broadcast display focused on the right part of the game.

#### Results

The solution increased the quality and accuracy of match broadcasts, performing similarly to a human camera operator. 3× more sports could be covered with the same solution core, enabling the company to offer the product to more clients and adding significant value to the product through the new solution.

**Stacks:** Python, PyTorch, OpenCV, AWS (s3, ec2), GCP (Compute Engine).
