import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, object } from "zod";

export function FormDemo() {
    const schema = object({
        fullName: z.string().min(3).max(20),
        email: z.string().email(),
        age: z.number().min(18),
        passowrd: z.string().min(6).max(20),
        confirmPassword: z.string().min(6).max(20),
    }).refine((data) => data.passowrd === data.confirmPassword, {
        message: "Password and Confirm Password must be same",
        path: ["confirmPassword"],
    });

    type FormValues = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    function onSubmit(data: FormValues) {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Full Name..."
                    {...register("fullName")}
                />
                <p>{errors.fullName?.message}</p>
                <input
                    type="text"
                    placeholder="Email..."
                    {...register("email")}
                />
                <p>{errors.email?.message}</p>
                <input
                    type="number"
                    placeholder="Age..."
                    {...register("age")}
                />
                <p>{errors.age?.message}</p>
                <input
                    type="password"
                    placeholder="passowrd..."
                    {...register("passowrd")}
                />
                <p>{errors.passowrd?.message}</p>
                <input
                    type="password"
                    placeholder="Confirm Password..."
                    {...register("confirmPassword")}
                />
                <p>{errors.confirmPassword?.message}</p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
