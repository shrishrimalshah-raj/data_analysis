# data_analysis

db.getCollection('fiiindexschemas').find( { dailyLongPosition: { $gte: 10000 } } );