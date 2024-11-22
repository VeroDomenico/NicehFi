import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function BudgetPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Budget</h1>
        <Button>Create New Budget</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Housing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1000 / $1200</div>
            <Progress value={83} className="h-2 mt-2" />
            <p className="text-sm text-muted-foreground mt-2">83% of budget used</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Transportation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$300 / $400</div>
            <Progress value={75} className="h-2 mt-2" />
            <p className="text-sm text-muted-foreground mt-2">75% of budget used</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Food</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$450 / $500</div>
            <Progress value={90} className="h-2 mt-2" />
            <p className="text-sm text-muted-foreground mt-2">90% of budget used</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

