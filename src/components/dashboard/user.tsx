import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { authClient } from "@/lib/auth-client";
import { Skeleton } from "../ui/skeleton";

export function User() {
  const {
    data,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  return (
    <>
      {isPending ? (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-8 rounded-lg grayscale" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
        </div>
      ) : (
        <>
          {data?.user.image ? (
            <Avatar className="h-8 w-8 rounded-lg grayscale">
              <AvatarImage src={data?.user.image} alt={data?.user.name} />
              <AvatarFallback className="rounded-lg">
                {data?.user.name[0]}
              </AvatarFallback>
            </Avatar>
          ) : null}

          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{data?.user.name}</span>
            <span className="text-muted-foreground truncate text-xs">
              {data?.user.email}
            </span>
          </div>
        </>
      )}
    </>
  );
}
