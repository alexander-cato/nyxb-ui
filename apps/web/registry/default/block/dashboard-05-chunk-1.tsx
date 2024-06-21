
            import {Card,CardHeader,CardDescription,CardTitle,CardContent,CardFooter} from "~/registry/default/ui/card"
import {Progress} from "~/registry/default/ui/progress"

            export default function Component() {
              return (<Card x-chunk="dashboard-05-chunk-1">
                        <CardHeader className="pb-2">
                           <CardDescription>This Week</CardDescription>
                           <CardTitle className="text-4xl">$1,329</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <div className="text-xs text-muted-foreground">
                              +25% from last week
                           </div>
                        </CardContent>
                        <CardFooter>
                           <Progress value={25} aria-label="25% increase" />
                        </CardFooter>
                     </Card>)
            }