FROM mcr.microsoft.com/dotnet/aspnet:5.0-focal AS base
WORKDIR /app
#EXPOSE 5000

#ENV ASPNETCORE_URLS=http://+:5000

FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS build
WORKDIR /src
COPY ["Nakkikone.WebApi.csproj", "./"]
RUN dotnet restore "Nakkikone.WebApi.csproj"
COPY . .
RUN ls -la
RUN dotnet build "Nakkikone.WebApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Nakkikone.WebApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Nakkikone.WebApi.dll"]
CMD ASPNETCORE_URLS=http://*:$PORT dotnet HerokuApp.dll


