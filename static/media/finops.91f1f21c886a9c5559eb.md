<img src='/images/projects/finops.png' />

#### Background

The client operates in financial operations, acting as an intermediary for financial transactions and offering various facilitating services. The growing company was working to upgrade its existing systems, which were generating numerous problems that undermined client trust.

#### The Problem

All operations were stored and running in a MongoDB environment whose data had become messy over time — successive schema updates had left the data structure fragmented and inconsistent. It was necessary to redesign the entire storage structure, ensuring zero data loss throughout the migration, full traceability, and the ability to support daily transaction volumes.

#### The Solution

A full data migration was performed using the AWS ecosystem, which provided tools such as Spark to guarantee the scalability of transaction processing.

#### Results

The new system, fully cloud-based, is capable of handling high-volume batch processing workloads while guaranteeing transaction reliability.

**Stacks:** Python, PySpark, AWS (s3, ec2, Redshift, Glue).
