var lineData = {
  Year: [
    1999, 
    2000, 
    2001, 
    2002, 
    2003, 
    2004, 
    2005, 
    2006, 
    2007, 
    2008, 
    2009, 
    2010, 
    2011, 
    2012, 
    2013, 
    2014, 
    2015, 
    2016
    ],
  Alzheimers: [
    16.5, 
    18.1,
    19.3,
    20.8,
    22.1,
    22.6,
    24,
    23.7,
    23.8,
    25.8,
    24.2,
    25.1,
    24.7,
    23.8,
    23.5,
    25.4,
    29.4,
    30.3
    ], 
  CLRD: [
    45.4,
    44.2,
    43.9,
    43.9,
    43.7,
    41.6,
    43.9,
    41,
    41.4,
    44.7,
    42.7,
    42.2,
    42.5,
    41.5,
    42.1,
    40.5,
    41.6,
    40.6
  ], 
  Cancer: [
    200.8,
    199.6,
    196.5,
    194.3,
    190.9,
    186.8,
    185.1,
    181.8,
    179.3,
    176.4,
    173.5,
    172.8,
    169,
    166.5,
    163.2,
    161.2,
    158.5,
    155.8
  ], 
  Diabetes: [
    25,
    25.1,
    25.4,
    25.6,
    25.5,
    24.8,
    24.9,
    23.6,
    22.8,
    22,
    21.1,
    20.8,
    21.7,
    21.2,
    21.2,
    20.9,
    21.3,
    21
  ], 
  Heart: [
    266.5,
    257.6,
    249.5,
    244.6,
    236.3,
    221.6,
    216.8,
    205.5,
    196.1,
    192.1,
    182.8,
    179.1,
    173.7,
    170.5,
    169.8,
    167,
    168.5,
    165.5
  ],  
  Influenza: [
    23.5, 
    23.7,
    22.2,
    23.2,
    22.6,
    20.4,
    21,
    18.4,
    16.8,
    17.6,
    16.5,
    15.1,
    15.7,
    14.5,
    15.9,
    15.1,
    15.2,
    13.5
  ],  
  Kidney: [
    13,
    13.5,
    14.1,
    14.4,
    14.7,
    14.5,
    14.7,
    14.8,
    14.9,
    15.1,
    15.1,
    15.3,
    13.4,
    13.1,
    13.2,
    13.2,
    13.4,
    13.1
  ], 
  Stroke: [
    61.6,
    60.9,
    58.4,
    57.2,
    54.6,
    51.2,
    48,
    44.8,
    43.5,
    42.1,
    39.6,
    39.1,
    37.9,
    36.9,
    36.2,
    36.5,
    37.6,
    37.3
  ], 
  Suicide: [
    10.5,
    10.4,
    10.7,
    11,
    10.8,
    11,
    10.9,
    11,
    11.3,
    11.6,
    11.8,
    12.1,
    12.3,
    12.6,
    12.6,
    13,
    13.3,
    13.5
  ], 
  Unintentional: [
    35.3,
    34.9,
    35.7,
    37.1,
    37.6,
    38.1,
    39.5,
    40.2,
    40.4,
    39.3,
    37.5,
    38,
    39.1,
    39.1,
    39.4,
    40.5,
    43.2,
    47.4]
  }

var data2 = {
  Year: [
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002,
      2001,
      2000,
      1999,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002,
      2001,
      2000,
      1999,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002,
      2001,
      2000,
      1999,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002,
      2001,
      2000,
      1999,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002,
      2001,
      2000,
      1999,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002,
      2001,
      2000,
      1999,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002,
      2001,
      2000,
      1999,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002,
      2001,
      2000,
      1999,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002,
      2001,
      2000,
      1999,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      2008,
      2007,
      2006,
      2005,
      2004,
      2003,
      2002,
      2001,
      2000,
      1999
  ],
  Cause: [
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      "Alzheimer's disease",
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'Cancer',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'CLRD',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Diabetes',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Heart disease',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Influenza and pneumonia',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Kidney disease',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Stroke',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Suicide',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries',
      'Unintentional injuries'
  ],
  Rate: [
        30.3,
        29.4,
        25.4,
        23.5,
        23.8,
        24.7,
        25.1,
        24.2,
        25.8,
        23.8,
        23.7,
        24.0,
        22.6,
        22.1,
        20.8,
        19.3,
        18.1,
        16.5,
        155.8,
        158.5,
        161.2,
        163.2,
        166.5,
        169.0,
        172.8,
        173.5,
        176.4,
        179.3,
        181.8,
        185.1,
        186.8,
        190.9,
        194.3,
        196.5,
        199.6,
        200.8,
        40.6,
        41.6,
        40.5,
        42.1,
        41.5,
        42.5,
        42.2,
        42.7,
        44.7,
        41.4,
        41.0,
        43.9,
        41.6,
        43.7,
        43.9,
        43.9,
        44.2,
        45.4,
        21.0,
        21.3,
        20.9,
        21.2,
        21.2,
        21.7,
        20.8,
        21.1,
        22.0,
        22.8,
        23.6,
        24.9,
        24.8,
        25.5,
        25.6,
        25.4,
        25.1,
        25.0,
        165.5,
        168.5,
        167.0,
        169.8,
        170.5,
        173.7,
        179.1,
        182.8,
        192.1,
        196.1,
        205.5,
        216.8,
        221.6,
        236.3,
        244.6,
        249.5,
        257.6,
        266.5,
        13.5,
        15.2,
        15.1,
        15.9,
        14.5,
        15.7,
        15.1,
        16.5,
        17.6,
        16.8,
        18.4,
        21.0,
        20.4,
        22.6,
        23.2,
        22.2,
        23.7,
        23.5,
        13.1,
        13.4,
        13.2,
        13.2,
        13.1,
        13.4,
        15.3,
        15.1,
        15.1,
        14.9,
        14.8,
        14.7,
        14.5,
        14.7,
        14.4,
        14.1,
        13.5,
        13.0,
        37.3,
        37.6,
        36.5,
        36.2,
        36.9,
        37.9,
        39.1,
        39.6,
        42.1,
        43.5,
        44.8,
        48.0,
        51.2,
        54.6,
        57.2,
        58.4,
        60.9,
        61.6,
        13.5,
        13.3,
        13.0,
        12.6,
        12.6,
        12.3,
        12.1,
        11.8,
        11.6,
        11.3,
        11.0,
        10.9,
        11.0,
        10.8,
        11.0,
        10.7,
        10.4,
        10.5,
        47.4,
        43.2,
        40.5,
        39.4,
        39.1,
        39.1,
        38.0,
        37.5,
        39.3,
        40.4,
        40.2,
        39.5,
        38.1,
        37.6,
        37.1,
        35.7,
        34.9,
        35.3
    ]
}

var data4 = {
  Cause2016: [
    'Heart disease', 'CLRD', 'Unintentional injuries', 'Cancer', 'Stroke', "Alzheimer's disease", 'Diabetes', 'Influenza and pneumonia', 'Kidney disease', 'Suicide'], 
  Percents2016: [
    31.230227926684723, 29.40034481758442, 7.933360830905173, 7.600145320898139, 6.987890089026257, 5.7077781585049845, 3.9357579374658025, 2.5336275802939747, 2.4603280339055877, 2.2105393047309425]
}