import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type LoginForm = z.infer<typeof loginSchema>;

const LoginScreen = () => {
  navigator = useNavigation();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "zaid@gmail.com",
      password: "123456",
    },
  });

  React.useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  const onSubmit = (data: LoginForm) => {
    console.log(data);
    navigator.navigate("BottomTab", { data: "asasa" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={(text) => setValue("email", text)}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setValue("password", text)}
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 24, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  error: { color: "red", marginBottom: 10 },
});

export default LoginScreen;
