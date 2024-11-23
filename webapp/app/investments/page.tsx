import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'

export default function InvestmentsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Investment Portfolio</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$150,345.67</div>
            <p className="text-xs text-muted-foreground">+5.3% overall return</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$89,234.56</div>
            <p className="text-xs text-muted-foreground">60% of portfolio</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Bonds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,678.90</div>
            <p className="text-xs text-muted-foreground">30% of portfolio</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Cash</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,432.21</div>
            <p className="text-xs text-muted-foreground">10% of portfolio</p>
          </CardContent>
        </Card>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Return</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>AAPL</TableCell>
            <TableCell>50</TableCell>
            <TableCell>$150.25</TableCell>
            <TableCell>$7,512.50</TableCell>
            <TableCell className="text-green-600">
              <ArrowUpIcon className="inline h-4 w-4 mr-1" />
              15.3%
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>GOOGL</TableCell>
            <TableCell>10</TableCell>
            <TableCell>$2,530.75</TableCell>
            <TableCell>$25,307.50</TableCell>
            <TableCell className="text-red-600">
              <ArrowDownIcon className="inline h-4 w-4 mr-1" />
              2.1%
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>US Treasury Bond</TableCell>
            <TableCell>100</TableCell>
            <TableCell>$980.50</TableCell>
            <TableCell>$98,050.00</TableCell>
            <TableCell className="text-green-600">
              <ArrowUpIcon className="inline h-4 w-4 mr-1" />
              3.5%
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

