"use client";

import React from "react";
import { useGetMessages } from "./_hooks/use-get-messages";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import { MessageType } from "./_types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useDeleteMessage } from "./_hooks/use-delete-message";
import { Empty, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { PiEmptyBold } from "react-icons/pi";

export default function MessagesPage() {
  const messagesQuery = useGetMessages();

  if (messagesQuery.isError) {
    return (
      <div className="p-4">
        <div className="text-center">{messagesQuery.error.message}</div>
      </div>
    );
  }

  if (messagesQuery.data?.length === 0) {
    return (
      <div className="p-4 flex">
        <Empty className="bg-accent h-fit w-fit">
          <EmptyMedia>
            <PiEmptyBold />
          </EmptyMedia>
          <EmptyTitle>No messages found.</EmptyTitle>
        </Empty>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="space-y-4 flex flex-col gap-4">
        {messagesQuery.data?.map((message: MessageType) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}

type MessageItemProps = {
  message: MessageType;
};

const MessageItem = (props: MessageItemProps) => {
  const deleteMessageMutation = useDeleteMessage();

  return (
    <Item className="bg-accent">
      <ItemHeader>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <ItemTitle>{props.message.subject}</ItemTitle>
            <Badge variant={"outline"}>
              {props.message.createdAt.split("T")[0]}
            </Badge>
          </div>
          <ItemDescription>{props.message.name}</ItemDescription>
        </div>

        <ItemActions>
          <Button
            onClick={() => deleteMessageMutation.mutate(props.message.id)}
          >
            <Trash />
          </Button>
        </ItemActions>
      </ItemHeader>
      <ItemContent>{props.message.message}</ItemContent>
    </Item>
  );
};
