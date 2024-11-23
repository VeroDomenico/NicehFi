import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function GoalsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Financial Goals</h1>
        <Button>Add New Goal</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Emergency Fund</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5000 / $10000</div>
            <Progress value={50} className="h-2 mt-2" />
            <p className="text-sm text-muted-foreground mt-2">50% of goal achieved</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>New Car</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15000 / $25000</div>
            <Progress value={60} className="h-2 mt-2" />
            <p className="text-sm text-muted-foreground mt-2">60% of goal achieved</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vacation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2000 / $5000</div>
            <Progress value={40} className="h-2 mt-2" />
            <p className="text-sm text-muted-foreground mt-2">40% of goal achieved</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

