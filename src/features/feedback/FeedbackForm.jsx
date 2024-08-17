import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { sendFeedback } from "@/services/apiFeedback";
import { toast } from "@/components/ui/use-toast";

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: sendFeedback,
    onSuccess: () => {
      toast({
        title: "Feedback send successfully",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong, Could not send feedback",
      });
    },
  });

  function onSubmit(data) {
    console.log(data);
    mutate(data);
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="font-bold">Send us your feedback</CardTitle>
        <CardDescription className="font-medium">
          We appreciate your input to help us improve our product.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              className="font-medium"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && (
              <p className="text-sm text-red-500 font-normal">
                Please enter your name
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback">Feedback</Label>
            <Textarea
              id="feedback"
              placeholder="Tell us what you think"
              className=" font-medium"
              {...register("feedback", {
                required: true,
              })}
            />
            {errors.feedback && (
              <p className="text-sm text-red-500 font-normal">
                Please enter your feedback
              </p>
            )}
          </div>
          <p type="submit" hidden>
            Submit
          </p>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSubmit(onSubmit)} type="submit">
          Send Feedback
        </Button>
      </CardFooter>
    </Card>
  );
}
