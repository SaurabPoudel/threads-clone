"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";


// import { updateUser } from "@/lib/actions/user.actions";
import {ThreadValidation} from "@/lib/validations/thread";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}


  
function PostThread({userId}:{userId: string}){
    const router = useRouter();
  const pathname = usePathname();


  const form = useForm({
    resolver: zodResolver(ThreadValidation),
    defaultValues: {
     thread:'',
     accountId: userId,
    },
  });

    return(
        <>
        <h1>Post Thread Form</h1>
        </>
    )
}

export default PostThread;