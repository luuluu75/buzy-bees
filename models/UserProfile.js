const { Sequelize, DataTypes } = require('sequelize');

const UserProfile = sequelize.define("userProfile", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
      type: DataTypes.STRING(64),
      is: /^[0-9a-f]{64}$/i
    },
},
   {
        freezeTableName: true
    },
);

  (async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();
// // `sequelize.define` also returns the model
// console.log(UserProfile === sequelize.models.UserProfile); // true
module.exports = UserProfile;