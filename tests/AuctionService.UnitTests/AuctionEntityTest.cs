namespace AuctionService.UnitTests;

public class UnitTest1
{
    [Fact]
    public void HasReservedPrice_ReservedPriceGtZero_True()
    {
        // arrange
        var auction = new Auction { Id = Guid.NewGuid(), ReservePrice = 0 };
        // act
        var result = auction.HasReservePrice();
        // assert
        Assert.True(result);
    }

    [Fact]
    public void HasReservedPrice_ReservedPriceGtZero_False()
    {
        // arrange
        var auction = new Auction { Id = Guid.NewGuid(), ReservePrice = 0 };

        // act
        var result = auction.HasReservePrice();

        // assert
        Assert.False(result);
    }

    [Fact]


}