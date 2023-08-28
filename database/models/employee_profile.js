last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middle_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  suffix: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  province_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  country_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
  contact_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  
  emergency_contact_number1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emergency_contact_number2: {
    type: DataTypes.STRING,
    allowNull: true,
  },


  educational_attainment: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  school_graduated: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  degree: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  place_of_birth: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  civil_status: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },