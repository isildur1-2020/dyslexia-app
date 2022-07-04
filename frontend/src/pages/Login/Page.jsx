import React from "react";
import PropTypes from "prop-types";
import { Layout } from "../../components/Layout/Layout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { InputLabel } from "@mui/material";

export const Page = ({
  handleSubmit,
  state,
  handleShowPassword,
  handleChange,
  isCompleted,
}) => {
  const { username, password, showPassword, currentLanguaje } = state;
  return (
    <Layout title="Login">
      <div className={styles.Login}>
        <form onSubmit={handleSubmit}>
          <div className={styles.Login__container}>
            <Box mb={4}>
              <InputLabel htmlFor="user-username">
                {currentLanguaje.user}
              </InputLabel>
              <Input
                fullWidth
                id="user-username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <InputLabel htmlFor="user-password">
                {currentLanguaje.password}
              </InputLabel>
              <Input
                fullWidth
                id="user-password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
            <Box mt={6}>
              <Button
                disabled={!isCompleted}
                type="submit"
                fullWidth
                variant="contained"
                size="large"
              >
                {currentLanguaje.submit}
              </Button>
            </Box>
          </div>
        </form>
      </div>
    </Layout>
  );
};

Page.propTypes = {
  handleSubmit: PropTypes.func,
  state: PropTypes.object,
  handleShowPassword: PropTypes.func,
  handleChange: PropTypes.func,
  isCompleted: PropTypes.bool,
};
