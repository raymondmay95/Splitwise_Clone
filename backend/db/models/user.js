"use strict";
const { Validator, Sequel } = require("sequelize");
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountBalance: {
        type: DataTypes.INTEGER,
        validate: {
          isUrl: true,
        },
      },
      fullName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [3, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [3, 256],
          isEmail: true,
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );
  User.associate = function (models) {
    User.hasMany(models.Friend, { foreignKey: "userId" });
    User.hasMany(models.Comment, { foreignKey: "userId" });
    User.hasMany(models.Owner, { foreignKey: "initiatedBy" });
  };
  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, fullName, email, accountBalance, photo } = this; // context will be the User instance
    return { id, fullName, email, accountBalance, photo };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require("sequelize");
    const user = await User.scope("loginUser").findOne({
      where: {
        [Op.or]: {
          fullName: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope("currentUser").findByPk(user.id);
    }
  };
  User.signup = async function ({ fullName, email, password, photo }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      fullName,
      email,
      hashedPassword,
      photo,
    });
    return await User.scope("currentUser").findByPk(user.id);
  };

  return User;
};
